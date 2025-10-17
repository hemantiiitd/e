import React from 'react';
import EmployeeCard from './EmployeeCard';
import './EmployeeList.css';

function EmployeeList({ employees, onEdit, onDelete, loading }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading employees...</p>
      </div>
    );
  }

  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <h2>No employees found</h2>
        <p>Start by adding a new employee</p>
      </div>
    );
  }

  return (
    <div className="employee-list">
      <div className="employee-count">
        <h2>Total Employees: {employees.length}</h2>
      </div>
      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;

