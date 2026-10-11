// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// GitHub Pages project site: https://josepkfr.github.io/Portfolio/
// With a custom domain (or Vercel/Netlify), set `site` to it and remove `base`.
const site = 'https://alpalajose.me';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'always',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      // src/pages/index.astro picks the language itself.
      redirectToDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      weights: [300, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Helvetica', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Playfair Display',
      cssVariable: '--font-playfair',
      weights: [400, 600],
      styles: ['italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
  integrations: [
    icon(),
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } },
      // The root page only redirects to a language.
      filter: (page) => new URL(page).pathname !== `/`,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
