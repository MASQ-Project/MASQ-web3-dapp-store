import path from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  parseCategoriesData,
  parseFeatureAppData,
  parseImagesIndex,
  resolveImagePath,
  fileExists,
  ROOT,
  DAPPS_CONFIG_PATH,
  IMAGES_INDEX_PATH,
} from '../lint/parse-config.js';
import { categoriesSchema, featuredAppSchema } from '../lint/schema.js';

/**
 * Category chrome SVGs historically ship with the browser app, not this public
 * repo. App icons (png/jpg/webp) referenced by dApps must exist here.
 */
const OPTIONAL_ASSET_EXTENSIONS = new Set(['.svg']);

function locLabel(loc) {
  if (!loc?.start) return '';
  return ` (line ${loc.start.line}:${loc.start.column + 1})`;
}

function collectIconRefs(categories) {
  const refs = [];
  for (const category of categories) {
    if (category.icon?.url?.__iconRef) {
      refs.push({
        key: category.icon.url.__iconRef,
        loc: category.icon.url.__loc,
        where: `category "${category.name}" icon`,
      });
    }
    for (const app of category.d_apps ?? []) {
      if (app.icon?.url?.__iconRef) {
        refs.push({
          key: app.icon.url.__iconRef,
          loc: app.icon.url.__loc,
          where: `dApp "${app.name}" in "${category.name}"`,
        });
      }
    }
  }
  return refs;
}

describe('configs/dapps.js structure', () => {
  const categories = parseCategoriesData();

  it('parses categoriesData as a non-empty array', () => {
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);
  });

  it('matches the rigid category/dApp schema (zod)', () => {
    const result = categoriesSchema.safeParse(categories);
    if (!result.success) {
      const details = result.error.issues
        .map((issue) => {
          const pathStr = issue.path.join('.') || '(root)';
          return `  • ${pathStr}: ${issue.message}`;
        })
        .join('\n');
      expect.fail(`Schema validation failed:\n${details}`);
    }
  });

  it('uses unique sequential category ids starting at 1', () => {
    const ids = categories.map((c) => c.id);
    expect(ids).toEqual(categories.map((_, i) => i + 1));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('uses unique sequential dApp ids within each category starting at 1', () => {
    const failures = [];
    for (const category of categories) {
      const ids = category.d_apps.map((app) => app.id);
      const expected = category.d_apps.map((_, i) => i + 1);
      if (JSON.stringify(ids) !== JSON.stringify(expected)) {
        failures.push(
          `category "${category.name}"${locLabel(category.__loc)}: ids=[${ids.join(', ')}] expected=[${expected.join(', ')}]`,
        );
      }
      if (new Set(ids).size !== ids.length) {
        failures.push(
          `category "${category.name}"${locLabel(category.__loc)}: duplicate dApp ids`,
        );
      }
    }
    expect(failures, failures.join('\n')).toEqual([]);
  });

  it('keeps dApp names unique within each category', () => {
    const failures = [];
    for (const category of categories) {
      const names = category.d_apps.map((app) => app.name);
      const seen = new Set();
      for (const name of names) {
        if (seen.has(name)) {
          failures.push(`category "${category.name}": duplicate dApp name "${name}"`);
        }
        seen.add(name);
      }
    }
    expect(failures, failures.join('\n')).toEqual([]);
  });

  it('keeps category names unique', () => {
    const names = categories.map((c) => c.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('requires every icon url to be a dapps.* export key that exists', () => {
    const { exportKeys } = parseImagesIndex();
    const exported = new Set(exportKeys.map((e) => e.key));
    const refs = collectIconRefs(categories);
    const failures = refs
      .filter((ref) => !exported.has(ref.key))
      .map(
        (ref) =>
          `${ref.where}${locLabel(ref.loc)}: dapps.${ref.key} is not exported from assets/images/dapps/index.js`,
      );

    expect(failures, failures.join('\n')).toEqual([]);
  });

  it('requires every referenced app icon file (non-svg) to exist on disk', () => {
    const { exportKeys } = parseImagesIndex();
    const byKey = new Map(exportKeys.map((e) => [e.key, e]));
    const refs = collectIconRefs(categories);
    const failures = [];

    for (const ref of refs) {
      const entry = byKey.get(ref.key);
      if (!entry?.import) {
        failures.push(
          `${ref.where}${locLabel(ref.loc)}: dapps.${ref.key} has no matching import`,
        );
        continue;
      }

      const abs = resolveImagePath(entry.import.source);
      const ext = path.extname(abs).toLowerCase();
      if (OPTIONAL_ASSET_EXTENSIONS.has(ext)) continue;

      if (!fileExists(abs)) {
        failures.push(
          `${ref.where}${locLabel(ref.loc)}: missing asset for dapps.${ref.key} → ${path.relative(ROOT, abs)}`,
        );
      }
    }

    expect(failures, failures.join('\n')).toEqual([]);
  });
});

describe('assets/images/dapps/index.js', () => {
  const { exportKeys, imports } = parseImagesIndex();

  it('exports at least one image key', () => {
    expect(exportKeys.length).toBeGreaterThan(0);
  });

  it('keeps export keys unique', () => {
    const keys = exportKeys.map((e) => e.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('maps every export to a default import', () => {
    const failures = exportKeys
      .filter((e) => !e.import)
      .map((e) => `export "${e.key}"${locLabel(e.loc)} has no matching import`);
    expect(failures, failures.join('\n')).toEqual([]);
  });

  it('keeps import local names unique', () => {
    const names = [...imports.keys()];
    expect(new Set(names).size).toBe(names.length);
  });

  it('requires non-svg imported asset files to exist', () => {
    const failures = [];
    for (const [localName, meta] of imports) {
      const abs = resolveImagePath(meta.source);
      const ext = path.extname(abs).toLowerCase();
      if (OPTIONAL_ASSET_EXTENSIONS.has(ext)) continue;
      if (!fileExists(abs)) {
        failures.push(
          `import ${localName}${locLabel(meta.loc)}: missing ${path.relative(ROOT, abs)}`,
        );
      }
    }
    expect(failures, failures.join('\n')).toEqual([]);
  });
});

describe('featuredapp/DApps.js featureAppData', () => {
  const featured = parseFeatureAppData();
  const { exportKeys } = parseImagesIndex();
  const exported = new Set(exportKeys.map((e) => e.key));

  it('parses a non-empty feature list', () => {
    expect(featured.length).toBeGreaterThan(0);
  });

  it('matches the featured app schema', () => {
    for (const [i, app] of featured.entries()) {
      const result = featuredAppSchema.safeParse(app);
      if (!result.success) {
        const details = result.error.issues
          .map((issue) => `  • [${i}].${issue.path.join('.')}: ${issue.message}`)
          .join('\n');
        expect.fail(`featureAppData[${i}] invalid:\n${details}`);
      }
    }
  });

  it('references exported icon keys', () => {
    const failures = [];
    for (const app of featured) {
      const key = app.icon?.url?.__iconRef;
      if (!key || !exported.has(key)) {
        failures.push(
          `featured "${app.name}"${locLabel(app.icon?.url?.__loc)}: dapps.${key} is not exported`,
        );
      }
    }
    expect(failures, failures.join('\n')).toEqual([]);
  });
});

describe('source files are present', () => {
  it('keeps the canonical config paths', () => {
    expect(fileExists(DAPPS_CONFIG_PATH)).toBe(true);
    expect(fileExists(IMAGES_INDEX_PATH)).toBe(true);
  });
});
