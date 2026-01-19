# Shift Assignment Management System

## Project Overview
The **Shift Assignment Management System** is a role-based employee shift management application designed to simplify shift creation, assignment, and tracking within an organization.

The system distinguishes between **Managers** and **Staff members**, ensuring that only authorized users can perform sensitive operations such as creating or assigning shifts. Authentication and authorization are handled securely using **JWT-based access control**, and all data is stored persistently in **MongoDB Atlas**.

This project follows a clean **MVC architecture**, making the backend scalable, maintainable, and easy to extend.

---

## Tech Stack

### Frontend
- React.js (Vite)
- Axios for API communication
- HTML5, CSS3

### Backend
- Node.js
- Express.js
- JSON Web Tokens (JWT)
- Bcrypt.js for password hashing

### Database
- MongoDB Atlas
- Mongoose (ODM)

### Development Tools
- VS Code
- Postman

---

## User Roles and Permissions

### Manager
Managers have administrative privileges and can:
- Register and log in
- Create new shifts
- View all staff members
- Assign shifts to staff
- Access the manager dashboard

### Staff
Staff members have limited access and can:
- Register and log in
- View only their assigned shifts
- Access the staff dashboard

Access to each feature is controlled using **role-based middleware**, ensuring secure separation of responsibilities.

---

## Authentication & Authorization

The application uses **JWT authentication** with role validation.

### Flow:
1. User logs in with email and password
2. Backend verifies credentials
3. A JWT token is generated containing:
   - User ID
   - User role (MANAGER / STAFF)
4. Token is sent to the client
5. For protected routes:
   - `authMiddleware` verifies the token
   - `roleMiddleware` checks user role
6. Access is granted or denied accordingly

---

## API Endpoints

### Authentication Routes
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/auth/staff` | Fetch all staff users (Manager only) |

---

### Shift Routes
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/shifts` | Create a shift (Manager only) |
| GET | `/api/shifts` | Retrieve all shifts |

---

### Assignment Routes
| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/assignments` | Assign a shift to staff |
| GET | `/api/assignments/my` | View assigned shifts (Staff) |

---

## Database Schema

### User Collection
Stores authentication and role information.
```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "password": "Hashed String",
  "role": "MANAGER | STAFF"
}


post method
backend - http://localhost:5000/api/auth/login
credential -
{
  "email": "mng@gmail.com",
  "password": "123"
}



