---
title: React Shop
summary: Interfaz de una tienda en línea como SPA en React, con enrutamiento, carrito y flujo de cuenta, y Webpack configurado desde cero.
category: frontend
stack: [React, React Router, Sass, Webpack]
repo: https://github.com/Josepkfr/React-Shop
date: 2021-10-30
---

Frontend de una tienda en línea desarrollado como aplicación de una sola página (SPA) con React y React Router. El proyecto no utiliza Create React App: el entorno de compilación con Webpack y Babel está configurado manualmente.

## Funcionalidades

- Catálogo y detalle de producto, carrito de compras, checkout y listado de pedidos.
- Flujo de cuenta: inicio de sesión, registro, recuperación de contraseña y perfil.
- Enrutamiento del lado del cliente con layout compartido y página 404.

## Aspectos técnicos

- **Componentes:** arquitectura separada en componentes reutilizables, contenedores y páginas.
- **Estilos:** hojas Sass por componente con variables compartidas.
- **Build:** Webpack 5 y Babel configurados desde cero, con loaders para JSX, Sass y recursos estáticos, alias de importación, `HtmlWebpackPlugin` y servidor de desarrollo con soporte para rutas del cliente.
