import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as acorn from 'acorn';
import { simple as walk } from 'acorn-walk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, '..');

export const DAPPS_CONFIG_PATH = path.join(ROOT, 'configs', 'dapps.js');
export const IMAGES_INDEX_PATH = path.join(ROOT, 'assets', 'images', 'dapps', 'index.js');
export const FEATURED_APPS_PATH = path.join(ROOT, 'featuredapp', 'DApps.js');

function parseSource(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const ast = acorn.parse(source, {
    ecmaVersion: 'latest',
    sourceType: 'module',
    locations: true,
  });
  return { source, ast };
}

function literalValue(node) {
  if (!node) return undefined;
  if (node.type === 'Literal') return node.value;
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) {
    return node.quasis.map((q) => q.value.cooked).join('');
  }
  if (node.type === 'UnaryExpression' && node.operator === '-' && node.argument.type === 'Literal') {
    return -node.argument.value;
  }
  return undefined;
}

function iconRef(node) {
  if (
    node?.type === 'MemberExpression' &&
    !node.computed &&
    node.object.type === 'Identifier' &&
    node.object.name === 'dapps' &&
    node.property.type === 'Identifier'
  ) {
    return {
      key: node.property.name,
      loc: node.loc,
    };
  }
  return null;
}

function evalObject(node) {
  if (node.type !== 'ObjectExpression') {
    throw new Error(`Expected ObjectExpression, got ${node.type}`);
  }

  const obj = {};
  for (const prop of node.properties) {
    if (prop.type !== 'Property' || prop.computed || prop.kind !== 'init') {
      throw new Error(`Unsupported property in object at line ${prop.loc?.start?.line}`);
    }
    const key =
      prop.key.type === 'Identifier'
        ? prop.key.name
        : prop.key.type === 'Literal'
          ? String(prop.key.value)
          : null;
    if (!key) {
      throw new Error(`Unsupported property key at line ${prop.loc?.start?.line}`);
    }

    const ref = iconRef(prop.value);
    if (ref) {
      obj[key] = { __iconRef: ref.key, __loc: ref.loc };
      continue;
    }

    if (prop.value.type === 'ObjectExpression') {
      obj[key] = evalObject(prop.value);
      continue;
    }

    if (prop.value.type === 'ArrayExpression') {
      obj[key] = prop.value.elements.map((el, i) => {
        if (!el) throw new Error(`Sparse array at line ${prop.loc?.start?.line}`);
        if (el.type === 'ObjectExpression') return evalObject(el);
        const lit = literalValue(el);
        if (lit !== undefined) return lit;
        throw new Error(`Unsupported array element [${i}] at line ${el.loc?.start?.line}`);
      });
      continue;
    }

    const lit = literalValue(prop.value);
    if (lit !== undefined) {
      obj[key] = lit;
      continue;
    }

    // Allow opaque identifier refs (e.g. banner: feature1)
    if (prop.value.type === 'Identifier') {
      obj[key] = { __ident: prop.value.name, __loc: prop.value.loc };
      continue;
    }

    throw new Error(
      `Unsupported value for "${key}" (${prop.value.type}) at line ${prop.value.loc?.start?.line}`,
    );
  }

  obj.__loc = node.loc;
  return obj;
}

function findExportedArray(ast, exportName) {
  let found = null;

  walk(ast, {
    ExportNamedDeclaration(node) {
      if (node.declaration?.type === 'VariableDeclaration') {
        for (const decl of node.declaration.declarations) {
          if (decl.id.type === 'Identifier' && decl.id.name === exportName) {
            found = decl.init;
          }
        }
      }
    },
    VariableDeclarator(node) {
      if (node.id.type === 'Identifier' && node.id.name === exportName) {
        found = node.init;
      }
    },
  });

  return found;
}

/**
 * Parse configs/dapps.js into plain data with icon refs preserved.
 */
export function parseCategoriesData() {
  const { ast } = parseSource(DAPPS_CONFIG_PATH);
  const init = findExportedArray(ast, 'categoriesData');
  if (!init || init.type !== 'ArrayExpression') {
    throw new Error('Could not find exported categoriesData array in configs/dapps.js');
  }

  return init.elements.map((el, i) => {
    if (!el || el.type !== 'ObjectExpression') {
      throw new Error(`categoriesData[${i}] must be an object`);
    }
    return evalObject(el);
  });
}

/**
 * Parse assets/images/dapps/index.js for import paths and export keys.
 */
export function parseImagesIndex() {
  const { ast } = parseSource(IMAGES_INDEX_PATH);
  const imports = new Map(); // localName -> { source, loc }
  let exportKeys = [];

  walk(ast, {
    ImportDeclaration(node) {
      for (const spec of node.specifiers) {
        if (spec.type === 'ImportDefaultSpecifier') {
          imports.set(spec.local.name, {
            source: node.source.value,
            loc: node.loc,
          });
        }
      }
    },
    ExportDefaultDeclaration(node) {
      if (node.declaration.type === 'ObjectExpression') {
        exportKeys = node.declaration.properties.map((prop) => {
          if (prop.type !== 'Property' || prop.computed) {
            throw new Error('Unsupported export property in images index');
          }
          const key =
            prop.key.type === 'Identifier'
              ? prop.key.name
              : prop.key.type === 'Literal'
                ? String(prop.key.value)
                : null;
          if (!key) throw new Error('Unsupported export key in images index');

          // shorthand: { timpi } or { timpi: timpi }
          let localName = key;
          if (prop.value.type === 'Identifier') {
            localName = prop.value.name;
          }

          return {
            key,
            localName,
            loc: prop.loc,
            import: imports.get(localName) ?? null,
          };
        });
      }
    },
  });

  return { imports, exportKeys };
}

/**
 * Parse featuredapp/DApps.js featureAppData array.
 * The file contains JSX, so we extract the array literal by source range
 * instead of walking the full AST.
 */
export function parseFeatureAppData() {
  const source = fs.readFileSync(FEATURED_APPS_PATH, 'utf8');
  const marker = 'const featureAppData =';
  const start = source.indexOf(marker);
  if (start === -1) {
    throw new Error('Could not find featureAppData in featuredapp/DApps.js');
  }

  const arrayStart = source.indexOf('[', start);
  if (arrayStart === -1) {
    throw new Error('Could not find featureAppData array start in featuredapp/DApps.js');
  }

  let depth = 0;
  let end = -1;
  for (let i = arrayStart; i < source.length; i++) {
    const ch = source[i];
    if (ch === '[') depth += 1;
    else if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        end = i + 1;
        break;
      }
    }
  }
  if (end === -1) {
    throw new Error('Unterminated featureAppData array in featuredapp/DApps.js');
  }

  const arraySource = source.slice(arrayStart, end);
  const ast = acorn.parse(`(${arraySource})`, {
    ecmaVersion: 'latest',
    sourceType: 'module',
    locations: true,
  });
  const expr = ast.body[0].expression;

  return expr.elements.map((el, i) => {
    if (!el || el.type !== 'ObjectExpression') {
      throw new Error(`featureAppData[${i}] must be an object`);
    }
    return evalObject(el);
  });
}

export function resolveImagePath(importSource) {
  const base = path.dirname(IMAGES_INDEX_PATH);
  return path.normalize(path.resolve(base, importSource));
}

export function fileExists(absPath) {
  return fs.existsSync(absPath);
}
