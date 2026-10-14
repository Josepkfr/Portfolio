---
title: React Shop
summary: Online store interface built as a React SPA, with routing, a cart and an account flow, and Webpack configured from scratch.
category: frontend
stack: [React, React Router, Sass, Webpack]
repo: https://github.com/Josepkfr/React-Shop
date: 2021-10-30
---

The frontend of an online store, developed as a single-page application (SPA) with React and React Router. The project does not use Create React App: the Webpack and Babel build environment is configured by hand.

## Features

- Product catalogue and product detail, shopping cart, checkout and order list.
- Account flow: login, sign-up, password recovery and profile.
- Client-side routing with a shared layout and a 404 page.

## Technical details

- **Components:** an architecture split into reusable components, containers and pages.
- **Styles:** per-component Sass stylesheets with shared variables.
- **Build:** Webpack 5 and Babel configured from scratch, with loaders for JSX, Sass and static assets, import aliases, `HtmlWebpackPlugin` and a development server that supports client-side routes.
