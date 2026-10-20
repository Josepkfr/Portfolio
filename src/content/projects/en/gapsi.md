---
title: Task manager with microservices
summary: Task management API with a microservices architecture in Go and Node.js, deployed on Google Cloud Run with Terraform and CI/CD.
category: backend
stack: [Go, Node.js, Fastify, Firestore, Docker, Terraform, Cloud Run, GitHub Actions]
repo: https://github.com/Josepkfr/gapsi
date: 2026-04-04
featured: true
---

A task management system made of two independent microservices behind a single entry point: a Node.js API Gateway receives client requests and delegates them to a task service written in Go, which persists data in Firestore.

## Architecture

- **API Gateway (Node.js, Fastify):** public entry point that proxies requests to the task service. It includes CORS, rate limiting, security headers, a per-request identifier, centralised error handling and a health check endpoint.
- **Task service (Go):** REST API to list, create, complete and delete tasks, organised in separate handler, model and repository layers.
- **Repository pattern:** a single interface with two implementations, Firestore and in-memory, selected through an environment variable. This allows development and testing without depending on the cloud.
- **Testing:** unit tests for the HTTP handlers and a Postman collection to exercise the endpoints.

## Infrastructure and CI/CD

- Each service is packaged as a Docker container and deployed to Google Cloud Run; images are published to Artifact Registry.
- The whole infrastructure (Artifact Registry, Firestore, Cloud Run and IAM) is defined as code with Terraform, with remote state in Cloud Storage.
- A GitHub Actions pipeline runs the Go tests, builds and publishes the images and applies the infrastructure on every push to the main branch.
