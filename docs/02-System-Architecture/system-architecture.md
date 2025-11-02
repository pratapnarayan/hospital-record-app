# 🧠 System Architecture Document (SAD)
## Project: Smart Health Record System

---

## 1. Overview

The **Smart Health Record System (SHRS)** is a digital healthcare management platform that enables doctors, hospitals, and patients to access and manage medical records securely through a **centralized system**.

It uses a **microservices-based architecture** with containerized services, enabling scalability, modularity, and fault isolation.  
AI-powered OCR (Optical Character Recognition) service automates the digitization of physical prescriptions and reports.

---

## 2. System Architecture Overview Diagram

```
[ Patient App (React Native) ]
        |
        v
[ API Gateway (Node.js / Express) ]
        |
        +-------------------------------+
        |                               |
        v                               v
 [ Auth Service ]              [ Patient Service ]
        |                               |
        v                               v
 [ MongoDB Users DB ]          [ MongoDB Patient DB ]
        |
        +-------------------------------+
        |                               |
        v                               v
 [ Record Service ]              [ OCR Service (Python + AI Model) ]
        |                               |
        +---------------v---------------+
                        |
                    [ Cloud Storage (S3 / GCS) ]
                        |
                        v
                [ Admin / Doctor Portal (React / Next.js) ]
```

---

## 3. Component Interactions

| Component | Description | Interaction |
|------------|--------------|-------------|
| **Frontend (React Native / React / Next.js)** | Patient app, doctor portal, and admin panel. | Communicates with backend APIs through secure HTTPS requests via the API Gateway. |
| **API Gateway (Node.js)** | Acts as an entry point for all requests. Handles routing, rate limiting, and authentication. | Routes requests to respective backend microservices. |
| **Auth Service** | Manages authentication (JWT) and user roles. | Issues tokens and validates permissions for users. |
| **Patient Service** | Manages patient profiles, medical IDs, and linked records. | CRUD operations on patient data in MongoDB. |
| **Record Service** | Stores and retrieves structured medical history, diagnoses, and prescriptions. | Interfaces with the OCR service to update records automatically. |
| **OCR Service (AI Engine)** | Processes uploaded images or PDFs, extracts text using trained ML models, and classifies relevant data (e.g., medicines, diagnoses). | Returns structured data to Record Service for storage. |
| **Database Layer (MongoDB)** | Stores user, patient, and record data. | Used by microservices through dedicated schemas for modularity. |
| **Cloud Storage (S3 / GCS)** | Stores uploaded prescriptions and reports. | Linked via URL references in MongoDB collections. |
| **Admin Service / Portal** | Manages system settings, hospitals, and doctors. | Accesses system-level APIs via the API Gateway. |

---

## 4. Tech Stack Rationale

| Layer | Technology | Rationale |
|--------|-------------|-----------|
| **Frontend (Mobile)** | React Native | Cross-platform (Android/iOS) with single codebase, strong community, and modular UI. |
| **Frontend (Web)** | React / Next.js | SEO-friendly server-side rendering for admin and doctor portals, fast development. |
| **Backend Framework** | Node.js / NestJS | High performance, asynchronous I/O, microservice-friendly. |
| **Database** | MongoDB | Flexible document storage, ideal for varying medical record formats. |
| **AI/OCR Engine** | Python (FastAPI + Tesseract / custom ML model) | Easy integration of OCR and NLP models for medical text parsing. |
| **API Gateway** | Express.js / Kong Gateway | Manages routing, logging, throttling, and security. |
| **Containerization** | Docker | Enables consistent environments across dev, test, and production. |
| **Orchestration** | Kubernetes | Scalable, self-healing microservice deployments. |
| **CI/CD** | GitHub Actions | Automated builds, tests, and deployments. |
| **Cloud Provider** | AWS / GCP | Reliable hosting, managed databases, and storage services. |

---

## 5. API Gateway and Microservice Boundaries

### 🔹 API Gateway Responsibilities
- Route all incoming requests to corresponding microservices.
- Validate JWT tokens for user authentication.
- Handle rate limiting and throttling.
- Log requests for monitoring (via ELK Stack / CloudWatch).

### 🔹 Microservice Boundaries
| Service | Responsibility | Sample Endpoints |
|----------|----------------|------------------|
| **Auth Service** | Authentication, authorization, and token management. | `/auth/login`, `/auth/register`, `/auth/verify` |
| **Patient Service** | Patient registration, ID generation, and profile management. | `/patients/:id`, `/patients/create` |
| **Record Service** | Fetch and update medical records. | `/records/:id`, `/records/update` |
| **OCR Service** | Process uploaded files and extract structured data. | `/ocr/upload`, `/ocr/analyze` |
| **Admin Service** | Manage hospitals, doctors, and system configuration. | `/admin/users`, `/admin/hospitals` |

Each service has its **own database** (MongoDB collection or cluster), and communicates via REST APIs or internal service bus (e.g., RabbitMQ or Kafka for async processing).

---

## 6. Deployment Architecture

### 🔹 Cloud Infrastructure

```
                 +----------------------------+
                 |      Cloud Provider        |
                 | (AWS / GCP / Azure)        |
                 +------------+---------------+
                              |
                              v
           +------------------------------------------+
           |          Kubernetes Cluster              |
           |------------------------------------------|
           |  API Gateway  |  Auth Svc | Patient Svc  |
           |  Record Svc   |  OCR Svc  | Admin Svc    |
           +------------------------------------------+
                              |
                              v
             +------------------------------------+
             | MongoDB Atlas (Managed Database)   |
             +------------------------------------+
                              |
                              v
               +-------------------------------+
               | S3 / Cloud Storage (Reports)  |
               +-------------------------------+
                              |
                              v
               +----------------------------------+
               | GitHub Actions CI/CD Pipeline    |
               +----------------------------------+
```

### 🔹 Deployment Pipeline
1. **Code Commit** → Push to GitHub triggers workflow.  
2. **GitHub Actions** builds Docker images and runs automated tests.  
3. Images are pushed to **Container Registry (ECR / GCR)**.  
4. **Kubernetes** pulls the new image and rolls out updates.  
5. System health is verified through probes and logs.

---

## 7. Security Architecture

- **JWT Authentication** for API access.  
- **Role-Based Access Control (RBAC)** for patient, doctor, admin roles.  
- **Data Encryption**: AES-256 for data at rest, TLS 1.3 for data in transit.  
- **Audit Logging** for all data accesses and updates.  
- **API Rate Limiting** at Gateway level to prevent abuse.  
- **Periodic Backups** and snapshot storage for disaster recovery.  

---

## 8. Scalability and Reliability

| Component | Scaling Strategy |
|------------|------------------|
| **API Gateway** | Horizontal scaling behind load balancer. |
| **Microservices** | Auto-scaling using Kubernetes HPA based on CPU/memory. |
| **OCR Service** | Deployed separately to scale based on image processing queue. |
| **MongoDB** | Clustered setup with replica sets for failover. |
| **Storage** | S3/GCS automatically scales with demand. |

---

## 9. Monitoring & Logging

- **Prometheus + Grafana** for metrics (CPU, memory, latency).  
- **ELK Stack (Elasticsearch, Logstash, Kibana)** for centralized logging.  
- **Alerting** via Slack / Email for error thresholds.  

---

## 10. Summary

The **Smart Health Record System** is designed for **scalability, modularity, and security**, ensuring seamless collaboration among patients, doctors, and hospitals.  
The architecture’s AI-driven OCR capability and decentralized microservices make it a **next-generation healthcare platform** aligned with India’s digital health mission.

---

**Document Version:** v1.0  
**Last Updated:** November 2025  
**Author:** Project SHRS Architecture Team  
