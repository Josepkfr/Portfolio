---
title: Notes app with authentication
summary: Notes web application with user authentication, sessions and full CRUD, server-rendered with Express and MongoDB.
category: fullstack
stack: [Node.js, Express, Handlebars, MongoDB, Passport]
repo: https://github.com/Josepkfr/NotesApp
date: 2021-08-19
---

A server-rendered web application where each user signs up, logs in and manages their own notes. It is built with Express, Handlebars views and MongoDB as its database.

## Features

- User sign-up and login.
- Creating, editing and deleting notes; each user only has access to their own.
- Server-side form validation with confirmation and error messages.

## Technical details

- **Authentication:** Passport with a local strategy, bcrypt-hashed passwords and sessions with `express-session`.
- **Authorisation:** middleware that protects private routes and redirects to the login page.
- **Views:** Handlebars templates with layouts and partials; `method-override` to send PUT and DELETE from HTML forms.
- **Data and configuration:** Mongoose models for users and notes; configuration through environment variables.
