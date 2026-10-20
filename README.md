# Portfolio — José Alpala

Sitio estático hecho con [Astro](https://astro.build) y Tailwind CSS, en español e inglés.

## Requisitos

Node.js 22.12 o superior (`nvm use` toma la versión de `.nvmrc`).

## Comandos

| Comando           | Qué hace                                             |
| ----------------- | ---------------------------------------------------- |
| `npm install`     | Instala las dependencias                             |
| `npm run dev`     | Servidor local en `http://localhost:4321/`           |
| `npm run build`   | Genera el sitio en `dist/`                           |
| `npm run preview` | Sirve `dist/` para revisarlo antes de publicar       |
| `npm run check`   | Revisa tipos y plantillas                            |

## Dónde se edita cada cosa

- **Textos de la interfaz, bio y habilidades**: `src/i18n/ui.ts` (cada texto está en `es` y `en`).
- **Email, redes y CV**: `src/consts.ts`. Los PDF del botón "Descargar CV" (uno por idioma) viven en `public/cv/` y sus rutas se ponen en `cv`.
- **Proyectos**: un Markdown por proyecto e idioma en `src/content/projects/es/` y `src/content/projects/en/`, con el mismo nombre de archivo en ambos.
- **Colores y tipografía**: `src/styles/global.css` (variables al inicio) y `fonts` en `astro.config.mjs`.
- **Fotos**: `src/assets/me.jpg` y `src/assets/home-bg.jpg`. Astro genera las versiones optimizadas.

### Añadir un proyecto

```md
---
title: Nombre del proyecto
summary: Una frase que explique qué hace.
category: backend # frontend | fullstack | backend | data
stack: [Go, Docker]
cover: ../_covers/mi-proyecto.png # opcional: captura del proyecto
repo: https://github.com/Josepkfr/mi-proyecto # opcional
demo: https://ejemplo.com # opcional
date: 2026-04-04
featured: true # opcional: aparece primero
---

Descripción larga en Markdown.
```

Sin `cover` la tarjeta muestra una portada generada con el título. Las fichas con `draft: true`
llevan la etiqueta "Borrador" en `npm run dev` y el build avisa de que siguen pendientes; quita
esa línea cuando hayas revisado el texto.

## Publicación

El sitio es estático: `npm run build` lo genera en `dist/` y esa carpeta es lo que se publica.

La URL sale de `site` en `astro.config.mjs` (`https://alpalajose.me`); si cambia el dominio, cámbiala ahí.

Los iconos y la imagen para redes sociales de `public/` se regeneran con
`node scripts/prepare-assets.mjs`.
