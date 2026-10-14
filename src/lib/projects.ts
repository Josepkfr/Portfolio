import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export interface Project {
  slug: string;
  entry: CollectionEntry<'projects'>;
}

let warned = false;

export async function getProjects(lang: Locale): Promise<Project[]> {
  const entries = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));

  if (import.meta.env.PROD && !warned) {
    const drafts = entries.filter((entry) => entry.data.draft).map((entry) => entry.id);
    if (drafts.length > 0) {
      warned = true;
      console.warn(`[projects] Publishing ${drafts.length} entries still marked "draft: true".`);
    }
  }

  return entries
    .map((entry) => ({ slug: entry.id.slice(lang.length + 1), entry }))
    .sort(
      (a, b) =>
        Number(b.entry.data.featured) - Number(a.entry.data.featured) ||
        b.entry.data.date.getTime() - a.entry.data.date.getTime(),
    );
}

export function formatDate(date: Date, lang: Locale): string {
  const text = new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
  return text.charAt(0).toUpperCase() + text.slice(1);
}
