import { describe, expect, it } from 'vitest';
import { categoriesSchema, dappSchema } from '../lint/schema.js';

describe('schema rejects broken shapes', () => {
  it('rejects http links', () => {
    const result = dappSchema.safeParse({
      id: 1,
      name: 'Bad',
      description: 'nope',
      favorite: false,
      link: 'http://insecure.example',
      icon: { url: { __iconRef: 'x' } },
    });
    expect(result.success).toBe(false);
  });

  it('rejects favorite: true', () => {
    const result = dappSchema.safeParse({
      id: 1,
      name: 'Bad',
      description: 'nope',
      favorite: true,
      link: 'https://example.com',
      icon: { url: { __iconRef: 'x' } },
    });
    expect(result.success).toBe(false);
  });

  it('rejects empty categories', () => {
    const result = categoriesSchema.safeParse([]);
    expect(result.success).toBe(false);
  });

  it('rejects missing d_apps', () => {
    const result = categoriesSchema.safeParse([
      {
        id: 1,
        name: 'Discover',
        icon: { url: { __iconRef: 'discover' } },
      },
    ]);
    expect(result.success).toBe(false);
  });

  it('rejects unexpected dApp fields', () => {
    const result = dappSchema.safeParse({
      id: 1,
      name: 'Extra',
      description: 'has extra',
      favorite: false,
      link: 'https://example.com',
      icon: { url: { __iconRef: 'x' } },
      tags: ['nope'],
    });
    expect(result.success).toBe(false);
  });
});
