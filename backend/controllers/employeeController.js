const db = require('../config/database');

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employees ORDER BY created_at DESC');
    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching employees',
      error: error.message
    });
  }
};

// Get single employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }
    
    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching employee',
      error: error.message
    });
  }
};

// Create new employee
const createEmployee = async (req, res) => {
  try {
    const { employee_id, first_name, last_name, email, phone, department, position, salary, hire_date, status } = req.body;
    
    // Validation
    if (!employee_id || !first_name || !last_name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: employee_id, first_name, last_name, email'
      });
    }
    
    const [result] = await db.query(
      'INSERT INTO employees (employee_id, first_name, last_name, email, phone, department, position, salary, hire_date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [employee_id, first_name, last_name, email, phone, department, position, salary, hire_date, status || 'active']
    );
    
    res.status(201).json({
      success: true,
      message: 'Employee created successfully',
      data: {
        id: result.insertId,
        employee_id,
        first_name,
        last_name,
        email
      }
    });
  } catch (error) {
    console.error('Error creating employee:', error);
    
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({
        success: false,
        message: 'Employee ID or Email already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating employee',
      error: error.message
    });
  }
};

// Update employee
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { employee_id, first_name, last_name, email, phone, department, position, salary, hire_date, status } = req.body;
    
    // Check if employee exists
    const [existing] = await db.query('SELECT * FROM employees WHERE id = ?', [id]);
    
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }
    
    await db.query(
      'UPDATE employees SET employee_id = ?, first_name = ?, last_name = ?, email = ?, phone = ?, department = ?, position = ?, salary = ?, hire_date = ?, status = ? WHERE id = ?',
      [employee_id, first_name, last_name, email, phone, department, position, salary, hire_date, status, id]
    );
    
    res.json({
      success: true,
      message: 'Employee updated successfully'
    });
  } catch (error) {
    console.error('Error updating employee:', error);
    
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({
        success: false,
        message: 'Employee ID or Email already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error updating employee',
      error: error.message
    });
  }
};

// Delete employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if employee exists
    const [existing] = await db.query('SELECT * FROM employees WHERE id = ?', [id]);
    
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }
    
    await db.query('DELETE FROM employees WHERE id = ?', [id]);
    
    res.json({
      success: true,
      message: 'Employee deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting employee',
      error: error.message
    });
  }
};

// Search employees
const searchEmployees = async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a search query'
      });
    }
    
    const searchPattern = `%${query}%`;
    const [rows] = await db.query(
      'SELECT * FROM employees WHERE first_name LIKE ? OR last_name LIKE ? OR email LIKE ? OR department LIKE ? OR position LIKE ? OR employee_id LIKE ?',
      [searchPattern, searchPattern, searchPattern, searchPattern, searchPattern, searchPattern]
    );
    
    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('Error searching employees:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching employees',
      error: error.message
    });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees
};

