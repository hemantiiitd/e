import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import { FaUsers } from 'react-icons/fa';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/employees`);
      if (response.data.success) {
        setEmployees(response.data.data);
        setFilteredEmployees(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching employees:', err);
      setError('Failed to fetch employees. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add employee
  const handleAddEmployee = async (employeeData) => {
    try {
      const response = await axios.post(`${API_URL}/employees`, employeeData);
      if (response.data.success) {
        fetchEmployees();
        setShowForm(false);
        alert('Employee added successfully!');
      }
    } catch (err) {
      console.error('Error adding employee:', err);
      alert(err.response?.data?.message || 'Failed to add employee');
    }
  };

  // Update employee
  const handleUpdateEmployee = async (id, employeeData) => {
    try {
      const response = await axios.put(`${API_URL}/employees/${id}`, employeeData);
      if (response.data.success) {
        fetchEmployees();
        setShowForm(false);
        setEditingEmployee(null);
        alert('Employee updated successfully!');
      }
    } catch (err) {
      console.error('Error updating employee:', err);
      alert(err.response?.data?.message || 'Failed to update employee');
    }
  };

  // Delete employee
  const handleDeleteEmployee = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      try {
        const response = await axios.delete(`${API_URL}/employees/${id}`);
        if (response.data.success) {
          fetchEmployees();
          alert('Employee deleted successfully!');
        }
      } catch (err) {
        console.error('Error deleting employee:', err);
        alert('Failed to delete employee');
      }
    }
  };

  // Edit employee
  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  // Search employees
  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter(emp =>
        emp.first_name.toLowerCase().includes(query.toLowerCase()) ||
        emp.last_name.toLowerCase().includes(query.toLowerCase()) ||
        emp.email.toLowerCase().includes(query.toLowerCase()) ||
        emp.department.toLowerCase().includes(query.toLowerCase()) ||
        emp.position.toLowerCase().includes(query.toLowerCase()) ||
        emp.employee_id.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEmployees(filtered);
    }
  };

  // Close form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingEmployee(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <FaUsers className="header-icon" />
            <h1>Employee Management System</h1>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            + Add Employee
          </button>
        </div>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {!showForm ? (
          <>
            <SearchBar onSearch={handleSearch} />
            <EmployeeList
              employees={filteredEmployees}
              onEdit={handleEditEmployee}
              onDelete={handleDeleteEmployee}
              loading={loading}
            />
          </>
        ) : (
          <EmployeeForm
            employee={editingEmployee}
            onSubmit={editingEmployee ? handleUpdateEmployee : handleAddEmployee}
            onCancel={handleCloseForm}
          />
        )}
      </main>
    </div>
  );
}

export default App;

