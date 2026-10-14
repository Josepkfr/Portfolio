export const SITE = {
  name: 'José Alpala',
  email: 'alpalajose99@gmail.com',
  github: 'https://github.com/Josepkfr',
  linkedin: 'https://www.linkedin.com/in/jose-alpala/',
  cv: {
    es: '/cv/CV_Jose_Antonio_Alpala_Tapia.pdf',
    en: '/cv/CV_Jose_Antonio_Alpala_Tapia_EN.pdf',
  },
};

/** Prefixes a file from public/ with the configured base path. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
