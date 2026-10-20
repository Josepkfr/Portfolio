---
title: CRUD con Angular y Express
summary: "Aplicación full stack de gestión de registros: cliente SPA en Angular 12 y API REST en Node.js/Express con MongoDB."
category: fullstack
stack: [Angular, TypeScript, Node.js, Express, MongoDB, Mongoose]
repo: https://github.com/Josepkfr/Angular-CRUD
date: 2021-09-16
---

Aplicación full stack para gestionar registros de personas. El repositorio contiene las dos mitades del sistema: un cliente SPA en Angular 12 y un servidor en Express que expone la API REST y persiste los datos en MongoDB mediante Mongoose.

## Funcionalidades

- Alta, consulta, edición y eliminación de registros desde un único formulario con listado.
- Comunicación entre cliente y servidor a través de una API REST con los métodos GET, POST, PUT y DELETE.

## Aspectos técnicos

- **Backend:** rutas, controladores y modelos en capas separadas; esquema de Mongoose con campos obligatorios y marcas de tiempo automáticas.
- **Frontend:** servicio de Angular con `HttpClient`, modelo tipado en TypeScript y estilos con Bootstrap 5 (Bootswatch).
