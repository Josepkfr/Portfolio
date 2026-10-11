import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './i18n/ui';

// One Markdown file per project and language:
// src/content/projects/<lang>/<slug>.md (same slug in both languages).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(categories),
      stack: z.array(z.string()),
      // Screenshot next to the Markdown file, e.g. "../_covers/gapsi.png".
      // Without it the card shows a generated cover.
      cover: image().optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      // Text still to be reviewed. Shows a badge in `npm run dev` only.
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
