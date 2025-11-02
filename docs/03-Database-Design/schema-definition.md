# Database Design Document

## 📘 Overview
This document defines how data will be structured, stored, and maintained for the Health Record Management App.

---

## 🧩 ER Diagram
Entities:
- **Patients**
- **Doctors**
- **Hospitals**
- **Prescriptions**
- **Medical Records**

Relationships:
- A Patient can have multiple Medical Records.
- A Doctor can issue multiple Prescriptions.
- A Hospital hosts multiple Doctors.

---

## 🗂 Schema Definitions

### Patient
| Field | Type | Description |
|-------|------|--------------|
| patient_id | ObjectId | Unique identifier |
| name | String | Full name |
| age | Number | Age |
| gender | String | Gender |
| contact_info | Object | Phone, email, address |
| medical_history | [ObjectId] | References to medical records |

### Doctor
| Field | Type | Description |
|-------|------|--------------|
| doctor_id | ObjectId | Unique identifier |
| name | String | Full name |
| specialization | String | Medical specialization |
| hospital_id | ObjectId | Reference to Hospital |
| contact_info | Object | Phone, email |

### Hospital
| Field | Type | Description |
|-------|------|--------------|
| hospital_id | ObjectId | Unique identifier |
| name | String | Hospital name |
| address | String | Address |
| departments | [String] | List of departments |

### Prescription
| Field | Type | Description |
|-------|------|--------------|
| prescription_id | ObjectId | Unique identifier |
| patient_id | ObjectId | Reference to Patient |
| doctor_id | ObjectId | Reference to Doctor |
| diagnosis | String | Diagnosis details |
| medicines | [Object] | List of prescribed medicines |

### Medical Record
| Field | Type | Description |
|-------|------|--------------|
| record_id | ObjectId | Unique identifier |
| patient_id | ObjectId | Reference to Patient |
| description | String | Record description |
| attachments | [String] | URLs of uploaded files |

---

## 🗄 Data Retention and Archival Policies
- Records older than 7 years archived.
- Archived data compressed and encrypted.
- Retained for legal and compliance needs.

---

## 💾 Backup and Recovery Plan
- Daily incremental backups.
- Weekly full backups.
- Cloud-based redundancy.
- Recovery time objective (RTO): 2 hours.
- Recovery point objective (RPO): 30 minutes.
