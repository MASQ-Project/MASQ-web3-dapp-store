#!/usr/bin/env node
/**
 * Reads vitest JSON output and prints a Markdown summary for PR comments.
 * Exit code mirrors whether any tests failed.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RESULTS_PATH = path.join(ROOT, 'lint-results.json');
const MARKER = '<!-- masq-config-lint -->';

function loadResults() {
  if (!fs.existsSync(RESULTS_PATH)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(RESULTS_PATH, 'utf8'));
}

function extractFailureLines(test) {
  const lines = [];
  const raw =
    (Array.isArray(test.failureMessages) && test.failureMessages[0]) ||
    test.result?.errors?.[0]?.message ||
    test.failureMessage ||
    '';
  const cleaned = String(raw)
    .replace(/\u001b\[[0-9;]*m/g, '')
    .trim();

  if (!cleaned) return lines;

  for (const line of cleaned.split('\n')) {
    const trimmed = line.trimEnd();
    if (!trimmed) continue;
    // Skip vitest stack frames; keep assertion detail lines.
    if (/^\s*at\s+/.test(trimmed)) continue;
    if (trimmed.includes('node_modules')) continue;
    lines.push(trimmed);
  }
  return lines;
}

function buildMarkdown(results) {
  if (!results) {
    return [
      MARKER,
      '## Config lint',
      '',
      'Could not find `lint-results.json`. The lint job may have failed before tests ran.',
      '',
    ].join('\n');
  }

  const failed = [];
  for (const file of results.testResults ?? []) {
    for (const test of file.assertionResults ?? []) {
      if (test.status === 'failed') {
        failed.push({
          title: test.fullName || test.title,
          file: path.relative(ROOT, file.name).replaceAll('\\', '/'),
          lines: extractFailureLines(test),
        });
      }
    }
  }

  const numFailed = results.numFailedTests ?? failed.length;
  const numPassed = results.numPassedTests ?? 0;
  const numTotal = results.numTotalTests ?? numFailed + numPassed;

  if (numFailed === 0) {
    return [
      MARKER,
      '## Config lint',
      '',
      `Passed: **${numPassed}/${numTotal}** checks.`,
      '',
      'Config structure invariants are green.',
      '',
    ].join('\n');
  }

  const body = [
    MARKER,
    '## Config lint',
    '',
    `Failed: **${numFailed}/${numTotal}** checks.`,
    '',
    'The following config structure invariants failed:',
    '',
  ];

  for (const item of failed) {
    body.push(`### \`${item.title}\``);
    body.push('');
    body.push(`File: \`${item.file}\``);
    body.push('');
    if (item.lines.length) {
      body.push('```');
      body.push(...item.lines.slice(0, 40));
      body.push('```');
    } else {
      body.push('_No failure details available._');
    }
    body.push('');
  }

  body.push('Fix the config (or assets index) and push again.');
  body.push('');
  return body.join('\n');
}

const results = loadResults();
const markdown = buildMarkdown(results);
const outPath = process.argv[2];
if (outPath) {
  fs.writeFileSync(outPath, markdown, 'utf8');
  // Always succeed when writing a report file (CI comment step).
  process.exit(0);
}

process.stdout.write(markdown);
const failed = results?.numFailedTests ?? 1;
process.exit(failed > 0 ? 1 : 0);
