---
title: CRUD with Angular and Express
summary: "Full-stack record management application: an Angular 12 SPA client and a Node.js/Express REST API with MongoDB."
category: fullstack
stack: [Angular, TypeScript, Node.js, Express, MongoDB, Mongoose]
repo: https://github.com/Josepkfr/Angular-CRUD
date: 2021-09-16
---

A full-stack application to manage records of people. The repository holds both halves of the system: an Angular 12 SPA client and an Express server that exposes the REST API and persists data in MongoDB through Mongoose.

## Features

- Create, read, update and delete records from a single form with a list view.
- Client-server communication through a REST API using the GET, POST, PUT and DELETE methods.

## Technical details

- **Backend:** routes, controllers and models in separate layers; a Mongoose schema with required fields and automatic timestamps.
- **Frontend:** an Angular service built on `HttpClient`, a typed TypeScript model and styling with Bootstrap 5 (Bootswatch).
