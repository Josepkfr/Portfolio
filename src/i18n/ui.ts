export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const categories = ['frontend', 'fullstack', 'backend', 'data'] as const;
export type Category = (typeof categories)[number];

export const ui = {
  es: {
    'meta.title': 'José Alpala — Desarrollador Full Stack especializado en backend',
    'meta.description':
      'Portafolio de José Alpala, desarrollador Full Stack especializado en backend. Experiencia con Go, Node.js, TypeScript, Python, React y AWS.',

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
    'hero.tagline': 'Desarrollador Full Stack · Backend · Cloud',
    'hero.scroll': 'Sigue bajando',

    'about.title': 'Sobre mí',
    'about.lead':
      'Desarrollador de software con más de 5 años de experiencia en desarrollo Full Stack, especializado en backend y en soluciones escalables en la nube.',
    'about.body':
      'He diseñado, implementado y mantenido microservicios y APIs REST con Go, Node.js, TypeScript y Python, sobre bases de datos SQL y NoSQL (PostgreSQL, MongoDB) y servicios de AWS (Lambda, EC2, RDS). Complemento el backend con desarrollo frontend en React y Angular, contenedores con Docker y Kubernetes, CI/CD con GitHub Actions y metodologías ágiles (Scrum), con foco en la calidad del código y la cobertura de pruebas.',
    'about.photoAlt': 'Retrato de José Alpala',
    'about.cta': 'Ver proyectos',
    'about.cv': 'Descargar CV',

    'skills.title': 'Habilidades',
    'skills.backend': 'Backend',
    'skills.backend.text': 'APIs y servicios que se pueden mantener y desplegar.',
    'skills.frontend': 'Frontend',
    'skills.frontend.text': 'Interfaces claras, rápidas y adaptadas a cualquier pantalla.',
    'skills.data': 'Datos',
    'skills.data.text': 'Modelado y consulta de datos en bases SQL y NoSQL.',
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
    'meta.title': 'José Alpala — Full-stack developer specialised in backend',
    'meta.description':
      'Portfolio of José Alpala, full-stack developer specialised in backend. Experience with Go, Node.js, TypeScript, Python, React and AWS.',

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
    'hero.tagline': 'Full-stack developer · Backend · Cloud',
    'hero.scroll': 'Keep scrolling',

    'about.title': 'About',
    'about.lead':
      'Software developer with over 5 years of experience in full-stack development, specialised in backend and scalable cloud solutions.',
    'about.body':
      'I have designed, built and maintained microservices and REST APIs with Go, Node.js, TypeScript and Python, backed by SQL and NoSQL databases (PostgreSQL, MongoDB) and AWS services (Lambda, EC2, RDS). I complement backend work with frontend development in React and Angular, containers with Docker and Kubernetes, CI/CD with GitHub Actions and agile methodologies (Scrum), with a focus on code quality and test coverage.',
    'about.photoAlt': 'Portrait of José Alpala',
    'about.cta': 'See projects',
    'about.cv': 'Download CV',

    'skills.title': 'Skills',
    'skills.backend': 'Backend',
    'skills.backend.text': 'APIs and services that are easy to maintain and deploy.',
    'skills.frontend': 'Frontend',
    'skills.frontend.text': 'Clear, fast interfaces that adapt to any screen.',
    'skills.data': 'Data',
    'skills.data.text': 'Modelling and querying data in SQL and NoSQL databases.',
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

export const heroWords: Record<Locale, string[]> = {
  es: ['José Alpala', 'Desarrollador', 'Backend', 'Frontend'],
  en: ['José Alpala', 'Developer', 'Backend', 'Frontend'],
};

export const skills = [
  {
    key: 'backend',
    icon: 'bi:hdd-stack',
    items: ['Node.js', 'Express', 'Fastify', 'Go', 'Python'],
  },
  {
    key: 'frontend',
    icon: 'bi:window-sidebar',
    items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'React Native', 'Flutter', 'Sass'],
  },
  {
    key: 'data',
    icon: 'bi:database',
    items: ['PostgreSQL', 'MongoDB', 'Firestore', 'pandas', 'polars'],
  },
  {
    key: 'cloud',
    icon: 'bi:cloud-check',
    items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Google Cloud Run', 'GitHub Actions', 'Git'],
  },
] as const;
