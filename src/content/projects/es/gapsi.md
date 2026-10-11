---
title: Gestor de tareas con microservicios
summary: Sistema de gestión de tareas con arquitectura de microservicios, desplegado en Google Cloud Run.
category: backend
stack: [Go, Node.js, Fastify, Firestore, Docker, Terraform, Cloud Run]
repo: https://github.com/Josepkfr/gapsi
date: 2026-04-04
featured: true
draft: true
---

Dos servicios independientes detrás de un único punto de entrada: el cliente habla con un API Gateway en Node.js (Fastify), que delega en un servicio de tareas escrito en Go con Firestore como base de datos.

## Infraestructura

- Cada servicio se empaqueta como contenedor Docker y se despliega en Google Cloud Run.
- Las imágenes se publican en Artifact Registry.
- Toda la infraestructura se define con Terraform.
