import { z } from 'zod';

/** Marks an icon reference like dapps.timpi after AST parsing. */
export const iconRefSchema = z.strictObject({
  __iconRef: z.string().min(1),
  __loc: z.any().optional(),
});

export const iconSchema = z.strictObject({
  url: iconRefSchema,
  __loc: z.any().optional(),
});

export const dappSchema = z.strictObject({
  id: z.number().int().positive(),
  name: z.string().trim().min(1),
  description: z.string().trim().min(1),
  favorite: z.literal(false),
  link: z
    .string()
    .url()
    .refine((url) => url.startsWith('https://'), {
      message: 'link must use https://',
    }),
  icon: iconSchema,
  __loc: z.any().optional(),
});

export const categorySchema = z.strictObject({
  id: z.number().int().positive(),
  name: z.string().trim().min(1),
  icon: iconSchema,
  d_apps: z.array(dappSchema).min(1),
  __loc: z.any().optional(),
});

export const categoriesSchema = z.array(categorySchema).min(1);

export const featuredAppSchema = z.strictObject({
  name: z.string().trim().min(1),
  description: z.string().trim().min(1),
  favorite: z.literal(false),
  link: z
    .string()
    .url()
    .refine((url) => url.startsWith('https://'), {
      message: 'link must use https://',
    }),
  icon: iconSchema,
  banner: z
    .strictObject({
      __ident: z.string().min(1),
      __loc: z.any().optional(),
    })
    .optional(),
  __loc: z.any().optional(),
});
