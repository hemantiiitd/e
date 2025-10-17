# Employee Management System

A full-stack web application for managing employee records with a modern, responsive UI built with React, Node.js, Express, and MySQL.

## 🚀 Features

- **Complete CRUD Operations**: Create, Read, Update, and Delete employee records
- **Search Functionality**: Search employees by name, email, department, position, or employee ID
- **Modern UI**: Beautiful, responsive design with gradient themes and smooth animations
- **Real-time Updates**: Instant feedback on all operations
- **Status Management**: Track active/inactive employee status
- **Comprehensive Employee Data**: Store and manage detailed employee information including:
  - Personal information (name, email, phone)
  - Employment details (employee ID, department, position)
  - Financial information (salary)
  - Employment dates and status

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MySQL** (v5.7 or higher) - [Download](https://dev.mysql.com/downloads/)
- **npm** or **yarn** package manager

## 🏗️ Project Structure

```
employee-management-system/
├── backend/                 # Node.js/Express backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── database/           # Database schema
│   ├── routes/             # API routes
│   ├── package.json        # Backend dependencies
│   └── server.js           # Server entry point
│
├── frontend/               # React frontend
│   ├── public/            # Public assets
│   ├── src/               # Source files
│   │   ├── components/    # React components
│   │   ├── App.js         # Main App component
│   │   ├── App.css        # App styles
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Global styles
│   └── package.json       # Frontend dependencies
│
└── README.md              # This file
```

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd e
```

### 2. Database Setup

1. Open MySQL command line or MySQL Workbench
2. Create the database and tables by running the schema file:

```bash
mysql -u root -p < backend/database/schema.sql
```

Or manually execute the SQL commands:

```sql
CREATE DATABASE IF NOT EXISTS employee_management;
USE employee_management;

-- Copy and paste the contents of backend/database/schema.sql
```

3. Update database credentials in `backend/.env` (create if it doesn't exist):

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=employee_management
DB_PORT=3306
PORT=5000
```

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start

# For development with auto-restart
npm run dev
```

The backend server will start on `http://localhost:5000`

### 4. Frontend Setup

Open a new terminal window/tab:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend application will automatically open in your browser at `http://localhost:3000`

## 🎯 Usage

### Adding a New Employee

1. Click the "Add Employee" button in the header
2. Fill in the required fields (Employee ID, First Name, Last Name, Email)
3. Optionally add phone, department, position, salary, and hire date
4. Click "Add Employee" to save

### Editing an Employee

1. Find the employee card you want to edit
2. Click the "Edit" button
3. Modify the desired fields
4. Click "Update Employee" to save changes

### Deleting an Employee

1. Find the employee card you want to delete
2. Click the "Delete" button
3. Confirm the deletion in the popup dialog

### Searching for Employees

1. Use the search bar at the top of the employee list
2. Type any part of:
   - Employee name
   - Email address
   - Department
   - Position
   - Employee ID
3. Results filter automatically as you type

## 🛠️ API Endpoints

### Employee Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| GET | `/api/employees/search?query=` | Search employees |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

### Example API Request

```javascript
// Get all employees
fetch('http://localhost:5000/api/employees')
  .then(response => response.json())
  .then(data => console.log(data));

// Create new employee
fetch('http://localhost:5000/api/employees', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    employee_id: 'EMP006',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
    phone: '555-0123',
    department: 'IT',
    position: 'Developer',
    salary: 70000,
    hire_date: '2024-01-15',
    status: 'active'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 🎨 Technology Stack

### Frontend
- **React** 18.2.0 - UI library
- **Axios** - HTTP client
- **React Icons** - Icon library
- **CSS3** - Styling with modern animations

### Backend
- **Node.js** - Runtime environment
- **Express** 4.18.2 - Web framework
- **MySQL2** - Database driver
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Database
- **MySQL** - Relational database

## 🔒 Environment Variables

### Backend (.env)

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_management
DB_PORT=3306
PORT=5000
```

### Frontend (optional)

Create `.env` file in frontend directory if backend is hosted elsewhere:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🐛 Troubleshooting

### Backend Issues

**Problem**: Database connection error
- **Solution**: Check if MySQL is running and credentials in `.env` are correct

**Problem**: Port 5000 already in use
- **Solution**: Change PORT in `.env` file and update frontend proxy in `frontend/package.json`

### Frontend Issues

**Problem**: API calls failing
- **Solution**: Ensure backend server is running on the correct port

**Problem**: CORS errors
- **Solution**: Backend has CORS enabled by default; check if backend is accessible

### Database Issues

**Problem**: Schema not created
- **Solution**: Run the SQL file manually in MySQL Workbench or command line

## 📝 Database Schema

```sql
employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  employee_id VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  phone VARCHAR(20),
  department VARCHAR(100),
  position VARCHAR(100),
  salary DECIMAL(10, 2),
  hire_date DATE,
  status ENUM('active', 'inactive'),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)
```

## 🚀 Production Deployment

### Backend Deployment

1. Set up a Node.js hosting service (Heroku, AWS, DigitalOcean, etc.)
2. Configure environment variables
3. Set up MySQL database (or use managed service like AWS RDS)
4. Deploy backend code

### Frontend Deployment

1. Build the production version:
```bash
cd frontend
npm run build
```

2. Deploy the `build` folder to:
   - **Netlify**: Drag and drop build folder
   - **Vercel**: Connect GitHub repository
   - **AWS S3**: Upload to S3 bucket with static hosting
   - **Any static hosting service**

3. Update API URL in frontend environment variables

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or issues, please open an issue in the repository.

---

**Built with ❤️ using React, Node.js, and MySQL**
