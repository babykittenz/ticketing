# Ticketing Application

This repository hosts a microservices-based ticketing application built using the MERN stack, Docker, Kubernetes, and Skaffold. The application follows best practices for scalability and maintainability.

---

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Microservices](#microservices)
- [Development Setup](#development-setup)
  - [Prerequisites](#prerequisites)
  - [Setup Steps](#setup-steps)
- [Project Structure](#project-structure)
- [Kubernetes Configuration](#kubernetes-configuration)
- [Skaffold](#skaffold)

---

## Overview

This application is designed to demonstrate a ticketing system that employs a microservice architecture. It leverages modern development tools to ensure rapid development and reliable deployment.

---

## Technologies

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Development Workflow**: Skaffold

---

## Microservices

### Auth Service

Responsible for user authentication and authorization. Provides routes for:

- **Signup**: `/api/users/signup`
- **Signin**: `/api/users/signin`
- **Signout**: `/api/users/signout`
- **Current User**: `/api/users/current-user`

---

## Development Setup

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Kubernetes (kubectl)](https://kubernetes.io/docs/tasks/tools/)
- [Skaffold](https://skaffold.dev/)

### Setup Steps

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd ticketing
   ```

2. **Install Dependencies**:
   Navigate to each service directory and install dependencies using:

   ```bash
   npm install
   ```

3. **Start Kubernetes Cluster**:
   Ensure your Kubernetes cluster is running (e.g., Minikube or Docker Desktop).

4. **Apply Kubernetes Configurations**:

   ```bash
   kubectl apply -f infra/k8s
   ```

5. **Run Skaffold**:
   Use Skaffold to handle builds and deployments:
   ```bash
   skaffold dev
   ```

---

## Project Structure

```
.
├── skaffold.yaml                # Skaffold configuration
├── infra                        # Infrastructure setup
│   ├── k8s                     # Kubernetes YAML files
│   │   ├── ingress-srv.yaml    # Ingress configuration
│   │   ├── auth-depl.yaml      # Auth service deployment
│   │   └── auth-mongo-depl.yaml # MongoDB deployment
├── auth                         # Auth microservice
│   ├── Dockerfile              # Docker image setup
│   ├── src                     # Source code
│   │   ├── routes              # Route handlers
│   │   ├── middlewares         # Middleware definitions
│   │   └── models              # Data models
└── README.md                   # Documentation
```

---

## Kubernetes Configuration

### Key Files

- **Ingress**: Manages external access to the services (`infra/k8s/ingress-srv.yaml`).
- **Deployments**:
  - `auth-depl.yaml`: Deployment and service configuration for the Auth service.
  - `auth-mongo-depl.yaml`: Deployment for the MongoDB database used by the Auth service.

### Commands

- **Apply Configurations**:

  ```bash
  kubectl apply -f infra/k8s
  ```

- **Check Pods**:

  ```bash
  kubectl get pods
  ```

- **Check Services**:
  ```bash
  kubectl get services
  ```

---

## Skaffold

### Overview

Skaffold handles continuous development workflows for Kubernetes-native applications. It automates building, pushing, and deploying containers.

### Commands

- **Run Development Mode**:

  ```bash
  skaffold dev
  ```

- **Build and Deploy**:

  ```bash
  skaffold run
  ```

- **Clean Up**:
  ```bash
  skaffold delete
  ```

---

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.
