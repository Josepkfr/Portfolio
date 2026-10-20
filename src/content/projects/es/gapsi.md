---
title: Gestor de tareas con microservicios
summary: API de gestión de tareas con arquitectura de microservicios en Go y Node.js, desplegada en Google Cloud Run con Terraform y CI/CD.
category: backend
stack: [Go, Node.js, Fastify, Firestore, Docker, Terraform, Cloud Run, GitHub Actions]
repo: https://github.com/Josepkfr/gapsi
date: 2026-04-04
featured: true
---

Sistema de gestión de tareas compuesto por dos microservicios independientes detrás de un único punto de entrada: un API Gateway en Node.js recibe las peticiones del cliente y las delega en un servicio de tareas escrito en Go, que persiste los datos en Firestore.

## Arquitectura

- **API Gateway (Node.js, Fastify):** punto de entrada público que actúa como proxy hacia el servicio de tareas. Incorpora CORS, rate limiting, cabeceras de seguridad, identificador por petición, manejo centralizado de errores y un endpoint de health check.
- **Servicio de tareas (Go):** API REST para listar, crear, completar y eliminar tareas, organizada en capas separadas de handlers, modelo y repositorio.
- **Patrón repositorio:** una misma interfaz con dos implementaciones, Firestore y memoria, seleccionadas mediante una variable de entorno. Esto permite desarrollar y probar sin depender de la nube.
- **Pruebas:** tests unitarios de los handlers HTTP y colección de Postman para probar los endpoints.

## Infraestructura y CI/CD

- Cada servicio se empaqueta como contenedor Docker y se despliega en Google Cloud Run; las imágenes se publican en Artifact Registry.
- Toda la infraestructura (Artifact Registry, Firestore, Cloud Run e IAM) se define como código con Terraform, con el estado remoto en Cloud Storage.
- Un pipeline de GitHub Actions ejecuta los tests de Go, construye y publica las imágenes y aplica la infraestructura en cada push a la rama principal.
