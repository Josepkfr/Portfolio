---
title: App de notas con autenticación
summary: Aplicación web de notas con autenticación de usuarios, sesiones y CRUD completo, renderizada en el servidor con Express y MongoDB.
category: fullstack
stack: [Node.js, Express, Handlebars, MongoDB, Passport]
repo: https://github.com/Josepkfr/NotesApp
date: 2021-08-19
---

Aplicación web renderizada en el servidor en la que cada usuario se registra, inicia sesión y gestiona sus propias notas. Está construida con Express, vistas en Handlebars y MongoDB como base de datos.

## Funcionalidades

- Registro e inicio de sesión de usuarios.
- Creación, edición y eliminación de notas; cada usuario solo accede a las suyas.
- Validación de formularios en el servidor y mensajes de confirmación o error.

## Aspectos técnicos

- **Autenticación:** Passport con estrategia local, contraseñas almacenadas con hash bcrypt y sesiones con `express-session`.
- **Autorización:** middleware que protege las rutas privadas y redirige al inicio de sesión.
- **Vistas:** plantillas Handlebars con layouts y componentes parciales; `method-override` para enviar PUT y DELETE desde formularios HTML.
- **Datos y configuración:** modelos de Mongoose para usuarios y notas; configuración mediante variables de entorno.
