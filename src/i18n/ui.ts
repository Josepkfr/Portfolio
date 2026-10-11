export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const categories = ['frontend', 'fullstack', 'backend', 'data'] as const;
export type Category = (typeof categories)[number];

// TODO(José): los textos de "about" y "skills" son provisionales, escritos a
// partir de tus repos públicos. Cámbialos por tu bio real en ambos idiomas.
export const ui = {
  es: {
    'meta.title': 'José Alpala — Desarrollador backend y frontend',
    'meta.description':
      'Portafolio de José Alpala, desarrollador web. Proyectos con Node.js, Go, Python, React y Angular.',

    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.language': 'Idioma',
    'nav.theme': 'Modo oscuro',
    'nav.skip': 'Saltar al contenido',

    'hero.greeting': 'Soy',
    'hero.tagline': 'Desarrollador web · Backend · Frontend',
    'hero.scroll': 'Sigue bajando',

    'about.title': 'Sobre mí',
    'about.lead':
      'Soy desarrollador web: construyo aplicaciones de principio a fin, desde la API hasta la interfaz.',
    'about.body':
      'Trabajo sobre todo con JavaScript y TypeScript, con Node.js en el servidor y React o Angular en el cliente. En mis proyectos más recientes también uso Go y Python, y despliego en la nube con Docker y Terraform.',
    'about.photoAlt': 'Retrato de José Alpala',
    'about.cta': 'Ver proyectos',
    'about.cv': 'Descargar CV',

    'skills.title': 'Habilidades',
    'skills.backend': 'Backend',
    'skills.backend.text': 'APIs y servicios que se pueden mantener y desplegar.',
    'skills.frontend': 'Frontend',
    'skills.frontend.text': 'Interfaces claras, rápidas y adaptadas a cualquier pantalla.',
    'skills.data': 'Datos',
    'skills.data.text': 'Modelado y consulta de datos en bases NoSQL.',
    'skills.cloud': 'Nube y herramientas',
    'skills.cloud.text': 'Contenedores e infraestructura como código.',

    'projects.title': 'Proyectos',
    'projects.filter': 'Filtrar proyectos por categoría',
    'projects.all': 'Todos',
    'projects.draft': 'Borrador',
    'projects.view': 'Ver proyecto',
    'projects.back': 'Proyectos',
    'projects.info': 'Información del proyecto',
    'projects.category': 'Categoría',
    'projects.date': 'Fecha',
    'projects.stack': 'Stack',
    'projects.repo': 'Ver código',
    'projects.demo': 'Ver demo',
    'projects.next': 'Siguiente proyecto',

    'category.frontend': 'Frontend',
    'category.fullstack': 'Full stack',
    'category.backend': 'Backend',
    'category.data': 'Datos',

    'contact.title': 'Hablemos',
    'contact.lead': '¿Tienes un proyecto o una vacante? Escríbeme y te respondo pronto.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.credit': 'Diseño basado en Folio de',
    'footer.top': 'Volver arriba',

    '404.title': 'Página no encontrada',
    '404.text': 'La página que buscas no existe o cambió de dirección.',
    '404.home': 'Ir al inicio',
  },
  en: {
    'meta.title': 'José Alpala — Backend and frontend developer',
    'meta.description':
      'Portfolio of José Alpala, web developer. Projects built with Node.js, Go, Python, React and Angular.',

    'nav.label': 'Main navigation',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.language': 'Language',
    'nav.theme': 'Dark mode',
    'nav.skip': 'Skip to content',

    'hero.greeting': "I'm",
    'hero.tagline': 'Web developer · Backend · Frontend',
    'hero.scroll': 'Keep scrolling',

    'about.title': 'About',
    'about.lead':
      "I'm a web developer: I build applications end to end, from the API to the interface.",
    'about.body':
      'I work mostly with JavaScript and TypeScript, with Node.js on the server and React or Angular on the client. My most recent projects also use Go and Python, deployed to the cloud with Docker and Terraform.',
    'about.photoAlt': 'Portrait of José Alpala',
    'about.cta': 'See projects',
    'about.cv': 'Download CV',

    'skills.title': 'Skills',
    'skills.backend': 'Backend',
    'skills.backend.text': 'APIs and services that are easy to maintain and deploy.',
    'skills.frontend': 'Frontend',
    'skills.frontend.text': 'Clear, fast interfaces that adapt to any screen.',
    'skills.data': 'Data',
    'skills.data.text': 'Modelling and querying data in NoSQL databases.',
    'skills.cloud': 'Cloud and tooling',
    'skills.cloud.text': 'Containers and infrastructure as code.',

    'projects.title': 'Projects',
    'projects.filter': 'Filter projects by category',
    'projects.all': 'All',
    'projects.draft': 'Draft',
    'projects.view': 'View project',
    'projects.back': 'Projects',
    'projects.info': 'Project information',
    'projects.category': 'Category',
    'projects.date': 'Date',
    'projects.stack': 'Stack',
    'projects.repo': 'View code',
    'projects.demo': 'View demo',
    'projects.next': 'Next project',

    'category.frontend': 'Frontend',
    'category.fullstack': 'Full stack',
    'category.backend': 'Backend',
    'category.data': 'Data',

    'contact.title': 'Get in touch',
    'contact.lead': "Have a project or an open role? Write to me and I'll get back to you soon.",
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.rights': 'All rights reserved.',
    'footer.credit': 'Design based on Folio by',
    'footer.top': 'Back to top',

    '404.title': 'Page not found',
    '404.text': 'The page you are looking for does not exist or has moved.',
    '404.home': 'Go to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function useTranslations(lang: Locale) {
  return (key: UIKey): string => ui[lang][key];
}

// The words the hero types after the greeting. The first one is rendered in
// the HTML, so it is what visitors without JavaScript or animations see.
export const heroWords: Record<Locale, string[]> = {
  es: ['José Alpala', 'Desarrollador', 'Backend', 'Frontend'],
  en: ['José Alpala', 'Developer', 'Backend', 'Frontend'],
};

// TODO(José): revisa la lista; solo incluye lo que aparece en tus repos públicos.
export const skills = [
  {
    key: 'backend',
    icon: 'bi:hdd-stack',
    items: ['Node.js', 'Express', 'Fastify', 'Go', 'Python'],
  },
  {
    key: 'frontend',
    icon: 'bi:window-sidebar',
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Sass'],
  },
  {
    key: 'data',
    icon: 'bi:database',
    items: ['MongoDB', 'Firestore', 'pandas'],
  },
  {
    key: 'cloud',
    icon: 'bi:cloud-check',
    items: ['Docker', 'Terraform', 'Google Cloud Run', 'Git'],
  },
] as const;
