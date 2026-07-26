import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.js'],
    reporters: ['default', 'json'],
    outputFile: {
      json: 'lint-results.json',
    },
  },
});
