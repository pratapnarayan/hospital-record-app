# Security and Compliance Plan

## 🔐 Authentication and Authorization
- OAuth2.0 and JWT for session management.
- Role-based access control (RBAC): Patient, Doctor, Admin.

## 🔒 Data Encryption
- **At Rest:** AES-256 encryption for all sensitive data.
- **In Transit:** TLS 1.3 for all communications.

## 👥 Access Control
- Patients can access their own records.
- Doctors can access patients’ records assigned to them.
- Admins manage permissions and system monitoring.

## 🧾 Audit Logs
- Every data change is logged with timestamp and actor ID.
- Tamper detection via hash validation.

## ⚖️ Compliance Standards
- HIPAA-inspired model adapted for India.
- Compliance with ABDM (Ayushman Bharat Digital Mission).
