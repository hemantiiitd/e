# 🚀 Quick Start Guide

Get the Employee Management System running in 5 minutes!

## ⚡ Super Quick Setup (3 Steps)

### 1️⃣ Setup Database (2 minutes)

```bash
# Login to MySQL
mysql -u root -p

# Run the schema file
source backend/database/schema.sql

# Exit
EXIT;
```

### 2️⃣ Start Backend (1 minute)

```bash
cd backend
npm install
# Create .env file and add your MySQL password (see backend/config/env.example)
npm run dev
```

**Important**: Create `backend/.env` file with your MySQL password:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_PASSWORD_HERE
DB_NAME=employee_management
DB_PORT=3306
PORT=5000
```

### 3️⃣ Start Frontend (1 minute)

**Open a NEW terminal:**
```bash
cd frontend
npm install
npm start
```

## ✅ Done!

- Backend: http://localhost:5000
- Frontend: http://localhost:3000 (opens automatically)

## 🎯 Test It

1. You should see 5 sample employees
2. Click "Add Employee" to add a new one
3. Try the search bar
4. Edit and delete employees

## ❌ Problems?

### Backend won't start?
- Check MySQL is running
- Verify `.env` file has correct password
- Make sure port 5000 is free

### Frontend shows no employees?
- Make sure backend is running
- Check http://localhost:5000 in browser
- Look for errors in browser console (F12)

### Database error?
```bash
# Reset database
mysql -u root -p
DROP DATABASE IF EXISTS employee_management;
source backend/database/schema.sql
```

## 📚 More Help

- Full Setup Guide: `SETUP_GUIDE.md`
- Main README: `README.md`
- Backend Details: `backend/README.md`
- Frontend Details: `frontend/README.md`

---

**That's it! Happy coding! 🎉**

