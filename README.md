# Portfolio Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white)
![ArgoCD](https://img.shields.io/badge/argocd-%23eb5b33.svg?style=for-the-badge&logo=argo&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Welcome to the frontend repository of my comprehensive Portfolio Website Platform. This project demonstrates a production-ready system leveraging modern DevOps and GitOps practices for automated, reliable, and scalable deployments on AWS.

## 🚀 Project Overview

This platform is a portfolio website system consisting of three microservices:
1.  **Public Frontend**: A responsive, user-friendly interface for visitors (This Repository).
2.  **Backend API**: A robust Node.js/Express API managing data and logic.
3.  **Admin Panel**: A secure dashboard for dynamic content management.

The entire infrastructure is provisioned as code (IaC) using **Terraform** and deployed on an **AWS EKS (Elastic Kubernetes Service)** cluster. The deployment pipeline follows strict **GitOps principles**, ensuring that the state of the cluster always matches the configuration in the git repositories.

## 🏗️ Architecture

The system uses a microservices architecture orchestrated by Kubernetes. Key architectural highlights include:

-   **Cloud Provider**: AWS (Amazon Web Services).
-   **Orchestration**: Amazon EKS (Managed Kubernetes).
-   **Infrastructure as Code**: Terraform for reproducible environments.
-   **CI/CD**: GitHub Actions for CI, Argo CD for CD (GitOps).
-   **Ingress**: AWS Load Balancer Controller managing Application Load Balancers (ALB).

### High-Level Architecture
*(Placeholder for Architecture Diagram - Please add your `architecture-diagram.png` here)*
> The architecture diagram illustrates the flow from code commit to deployment, highlighting the interaction between GitHub Actions, Docker Hub, the Manifest Repository, Argo CD, and the EKS Cluster.

### Cluster Architecture
![Cluster Architecture](assets/cluster-setup.png)

### System Workflow
![System Architecture](assets/architecture-diagram.png)

## 🛠️ Technology Stack

-   **Frontend**: React, TypeScript, Vite
-   **Backend**: Node.js, Express, TypeScript
-   **Containerization**: Docker
-   **Orchestration**: Kubernetes (AWS EKS)
-   **CI/CD**: GitHub Actions, Argo CD
-   **IaC**: Terraform
-   **Registry**: Docker Hub



## 🔄 Automated GitOps Workflow

This repository utilizes a fully automated CI/CD pipeline ensuring zero-touch deployments:

1.  **Code Commit**: Developers push code to `stage` or `main` branches.
2.  **Continuous Integration (GitHub Actions)**:
    -   **Build & Test**: The code is compiled and tested.
    -   **Docker Build**: A Docker image is built with the new changes.
    -   **Push to Registry**: The image is tagged (with `GITHUB_SHA`) and pushed to Docker Hub.
3.  **Manifest Update**:
    -   The workflow automatically clones the **Infrastructure Manifest Repository**.
    -   It updates the deployment manifest (e.g., `frontend-patch.yaml`) with the new Docker image tag.
    -   Changes are committed and pushed to the manifest repo.
4.  **Continuous Deployment (Argo CD)**:
    -   Argo CD detects the change in the manifest repository.
    -   It automatically syncs the EKS cluster state to match the new manifest, rolling out the update.

## 💻 Local Development

To run the frontend locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/KavinduGD/portfolio-frontend.git
    cd portfolio-frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file based on `.env.example` (if available) or configure the necessary VITE_ variables.

4.  **Start the development server**:
    ```bash
    npm run dev
    ```

## 🧪 Testing

Run the test suite with:

```bash
npm run test
```
