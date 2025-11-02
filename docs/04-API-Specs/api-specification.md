# API Specification Document

## 🌐 Overview
Defines communication standards between frontend and backend.

## 🧾 Endpoints

### Patients
- `GET /patients/:id` → Retrieve patient details
- `POST /patients` → Register new patient

### Records
- `GET /records/:patientId` → Fetch all medical records
- `POST /records` → Upload new record

### Authentication
- `POST /auth/login` → Login with JWT
- `POST /auth/register` → Create user account

## 📦 Request/Response Schema Example

**POST /patients**
```json
{
  "name": "John Doe",
  "age": 32,
  "gender": "Male",
  "contact_info": {"email": "john@example.com"}
}
```

**Response**
```json
{
  "status": "success",
  "patient_id": "abc123"
}
```

## 🚨 Error Codes
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error
