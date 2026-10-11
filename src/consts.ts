export const SITE = {
  name: 'José Alpala',
  email: 'alpalajose@gmail.com',
  github: 'https://github.com/Josepkfr',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-alpala-0280b4182/',
  // File name of the CV inside public/ (for example 'cv-jose-alpala.pdf').
  // While it is null the download button is not rendered.
  cv: null as string | null,
};

/** Prefixes a file from public/ with the configured base path. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
