---
title: Task manager with microservices
summary: Task management system with a microservices architecture, deployed on Google Cloud Run.
category: backend
stack: [Go, Node.js, Fastify, Firestore, Docker, Terraform, Cloud Run]
repo: https://github.com/Josepkfr/gapsi
date: 2026-04-04
featured: true
draft: true
---

Two independent services behind a single entry point: the client talks to a Node.js API Gateway (Fastify), which delegates to a task service written in Go with Firestore as its database.

## Infrastructure

- Each service is packaged as a Docker container and deployed to Google Cloud Run.
- Images are published to Artifact Registry.
- The whole infrastructure is defined with Terraform.
