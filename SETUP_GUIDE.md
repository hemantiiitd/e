# Complete Setup Guide - Employee Management System

This guide will walk you through setting up the Employee Management System from scratch.

## 📋 Prerequisites Checklist

Before you begin, ensure you have:

- [ ] Node.js installed (v14 or higher)
- [ ] MySQL installed (v5.7 or higher)
- [ ] A code editor (VS Code recommended)
- [ ] Git installed (optional, for version control)

### Verify Installations

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check MySQL version
mysql --version
```

## 🎯 Step-by-Step Setup

### Step 1: Download/Clone the Project

```bash
# If using Git
git clone <repository-url>
cd e

# Or download and extract the ZIP file
```

### Step 2: MySQL Database Setup

#### Option A: Using MySQL Command Line

1. Open Command Prompt (Windows) or Terminal (Mac/Linux)

2. Login to MySQL:
```bash
mysql -u root -p
```

3. Enter your MySQL password

4. Create the database and import schema:
```sql
source C:/Users/heman/aayush/e/backend/database/schema.sql
-- Or on Mac/Linux: source /path/to/backend/database/schema.sql
```

5. Verify the database:
```sql
USE employee_management;
SHOW TABLES;
SELECT * FROM employees;
```

6. Exit MySQL:
```sql
EXIT;
```

#### Option B: Using MySQL Workbench

1. Open MySQL Workbench
2. Connect to your MySQL server
3. Click File → Open SQL Script
4. Navigate to `backend/database/schema.sql`
5. Click the lightning bolt icon to execute
6. Refresh the schemas panel to see the new database

### Step 3: Backend Setup

1. Open a new terminal/command prompt

2. Navigate to backend directory:
```bash
cd backend
```

3. Install dependencies:
```bash
npm install
```

This will install:
- express
- mysql2
- cors
- dotenv
- body-parser
- nodemon (dev dependency)

4. Create `.env` file in the backend directory:

**Windows Command Prompt:**
```cmd
copy nul .env
notepad .env
```

**Mac/Linux Terminal:**
```bash
touch .env
nano .env
```

5. Add your configuration to `.env`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=employee_management
DB_PORT=3306
PORT=5000
```

**Important**: Replace `your_mysql_password_here` with your actual MySQL password!

6. Start the backend server:

**Development mode (recommended for testing):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

7. Verify backend is running:
- You should see: "Server is running on port 5000"
- You should see: "Database connected successfully"
- Open browser and visit: http://localhost:5000
- You should see a JSON response

### Step 4: Frontend Setup

1. Open a **NEW** terminal/command prompt (keep backend running)

2. Navigate to frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

This will install:
- react
- react-dom
- react-scripts
- axios
- react-icons

4. Start the frontend:
```bash
npm start
```

5. The application will automatically open in your browser at http://localhost:3000

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Backend server running on http://localhost:5000
- [ ] Frontend running on http://localhost:3000
- [ ] Can see sample employees on the frontend
- [ ] Can add a new employee
- [ ] Can edit an employee
- [ ] Can delete an employee
- [ ] Can search for employees

## 🐛 Troubleshooting Common Issues

### Issue 1: "Cannot find module 'express'"

**Solution:**
```bash
cd backend
npm install
```

### Issue 2: "Database connection error" / "ER_ACCESS_DENIED_ERROR"

**Solutions:**
1. Check MySQL is running:
   - Windows: Check Services for MySQL
   - Mac: `brew services list`
   - Linux: `sudo systemctl status mysql`

2. Verify credentials in `.env` file
3. Try connecting to MySQL manually: `mysql -u root -p`

### Issue 3: "Port 5000 is already in use"

**Solution:**
- Find and kill the process using port 5000
- Or change the port in `backend/.env`:
  ```env
  PORT=5001
  ```
- Also update frontend's proxy in `frontend/package.json`

### Issue 4: "CORS Error" in browser console

**Solution:**
- Make sure backend is running
- Backend already has CORS enabled
- Try restarting both servers

### Issue 5: Frontend shows "Failed to fetch employees"

**Solutions:**
1. Verify backend is running
2. Check backend URL is correct
3. Verify MySQL database is accessible
4. Check browser console for specific error

### Issue 6: Cannot create .env file

**Windows PowerShell:**
```powershell
New-Item .env -ItemType File
```

**Windows CMD:**
```cmd
type nul > .env
```

### Issue 7: "npm: command not found"

**Solution:**
- Node.js not installed or not in PATH
- Reinstall Node.js from https://nodejs.org
- Restart terminal after installation

## 🎓 Quick Start Commands Summary

```bash
# Terminal 1 - Backend
cd backend
npm install
# Create and configure .env file
npm run dev

# Terminal 2 - Frontend (in a new terminal)
cd frontend
npm install
npm start
```

## 📊 Testing the Application

### Test 1: Add New Employee
1. Click "Add Employee" button
2. Fill in:
   - Employee ID: EMP999
   - First Name: Test
   - Last Name: User
   - Email: test@test.com
   - Department: IT
   - Position: Tester
   - Salary: 50000
   - Hire Date: Today's date
   - Status: Active
3. Click "Add Employee"
4. Verify new employee appears in the list

### Test 2: Search Functionality
1. Type "EMP999" in search bar
2. Should see only the test employee
3. Clear search to see all employees

### Test 3: Edit Employee
1. Click "Edit" on test employee
2. Change salary to 55000
3. Click "Update Employee"
4. Verify salary changed

### Test 4: Delete Employee
1. Click "Delete" on test employee
2. Confirm deletion
3. Verify employee removed from list

## 🚀 Next Steps

Once everything is working:

1. **Explore the Code:**
   - Backend: `backend/server.js`, `backend/controllers/`
   - Frontend: `frontend/src/App.js`, `frontend/src/components/`

2. **Customize:**
   - Add more fields to employee form
   - Change colors in CSS files
   - Add more features

3. **Learn More:**
   - React documentation: https://react.dev
   - Express documentation: https://expressjs.com
   - MySQL documentation: https://dev.mysql.com/doc

## 📞 Getting Help

If you encounter issues:

1. Check the error message in the terminal
2. Check the browser console (F12) for frontend errors
3. Verify all prerequisites are installed
4. Make sure both backend and frontend are running
5. Check the troubleshooting section above

## 🎉 Success!

If you can see employees, add new ones, edit, delete, and search - congratulations! You've successfully set up the Employee Management System!

---

**Happy Coding! 🚀**

