# Employee Management System - Backend

Node.js/Express backend API for the Employee Management System.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env` file in the backend directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_management
DB_PORT=3306
PORT=5000
```

### Database Setup

Run the SQL schema to create the database and tables:

```bash
mysql -u root -p < database/schema.sql
```

### Start Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run on `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js          # MySQL connection configuration
├── controllers/
│   └── employeeController.js # Business logic for employee operations
├── database/
│   └── schema.sql           # Database schema and sample data
├── routes/
│   └── employeeRoutes.js    # API route definitions
├── .env                     # Environment variables (create this)
├── .env.example             # Example environment file
├── .gitignore              # Git ignore file
├── package.json            # Dependencies and scripts
└── server.js               # Server entry point
```

## 🛠️ API Endpoints

### Get All Employees
```
GET /api/employees
Response: { success: true, data: [...] }
```

### Get Single Employee
```
GET /api/employees/:id
Response: { success: true, data: {...} }
```

### Search Employees
```
GET /api/employees/search?query=searchterm
Response: { success: true, data: [...] }
```

### Create Employee
```
POST /api/employees
Body: {
  employee_id: "EMP001",
  first_name: "John",
  last_name: "Doe",
  email: "john@example.com",
  phone: "555-0123",
  department: "IT",
  position: "Developer",
  salary: 70000,
  hire_date: "2024-01-15",
  status: "active"
}
Response: { success: true, message: "Employee created successfully", data: {...} }
```

### Update Employee
```
PUT /api/employees/:id
Body: { ...employee data }
Response: { success: true, message: "Employee updated successfully" }
```

### Delete Employee
```
DELETE /api/employees/:id
Response: { success: true, message: "Employee deleted successfully" }
```

## 🔧 Dependencies

- **express**: Web framework
- **mysql2**: MySQL database driver with promise support
- **cors**: Enable cross-origin requests
- **dotenv**: Environment variable management
- **body-parser**: Parse incoming request bodies

## 🧪 Testing the API

### Using cURL

```bash
# Get all employees
curl http://localhost:5000/api/employees

# Create employee
curl -X POST http://localhost:5000/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "employee_id": "EMP010",
    "first_name": "Test",
    "last_name": "User",
    "email": "test@example.com",
    "department": "IT",
    "position": "Tester",
    "salary": 60000,
    "hire_date": "2024-01-01",
    "status": "active"
  }'
```

### Using Postman

1. Import the following endpoints:
   - GET: `http://localhost:5000/api/employees`
   - POST: `http://localhost:5000/api/employees`
   - PUT: `http://localhost:5000/api/employees/1`
   - DELETE: `http://localhost:5000/api/employees/1`

2. Set headers:
   - Content-Type: application/json

## 🐛 Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

Common HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

## 🔒 Security Considerations

For production deployment:

1. Use strong database passwords
2. Implement rate limiting
3. Add input validation and sanitization
4. Use HTTPS
5. Implement authentication/authorization
6. Use environment variables for sensitive data
7. Regular security updates for dependencies

## 📝 Database Schema

```sql
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  phone VARCHAR(20),
  department VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10, 2),
  hire_date DATE,
  status ENUM('active', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🚀 Deployment

### Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set DB_HOST=your_db_host
heroku config:set DB_USER=your_db_user
heroku config:set DB_PASSWORD=your_db_password
heroku config:set DB_NAME=your_db_name

# Deploy
git push heroku main
```

### Docker

Create `Dockerfile`:
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t employee-backend .
docker run -p 5000:5000 --env-file .env employee-backend
```

## 📊 Performance Tips

1. Use connection pooling (already implemented)
2. Add indexes on frequently queried columns
3. Implement caching for frequently accessed data
4. Use pagination for large datasets
5. Monitor query performance

## 🔍 Logging

The server logs:
- Database connection status
- Server startup confirmation
- Error messages for debugging

Consider adding a logging library like Winston for production.

