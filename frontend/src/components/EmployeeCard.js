import React from 'react';
import { FaEnvelope, FaPhone, FaBriefcase, FaBuilding, FaCalendar, FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './EmployeeCard.css';

function EmployeeCard({ employee, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatSalary = (salary) => {
    if (!salary) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(salary);
  };

  return (
    <div className="employee-card">
      <div className="card-header">
        <div className="employee-avatar">
          {employee.first_name.charAt(0)}{employee.last_name.charAt(0)}
        </div>
        <div className="employee-basic-info">
          <h3>{employee.first_name} {employee.last_name}</h3>
          <span className="employee-id">{employee.employee_id}</span>
        </div>
        <div className={`status-badge ${employee.status}`}>
          {employee.status === 'active' ? (
            <><FaCheckCircle /> Active</>
          ) : (
            <><FaTimesCircle /> Inactive</>
          )}
        </div>
      </div>

      <div className="card-body">
        <div className="info-row">
          <FaEnvelope className="info-icon" />
          <span className="info-label">Email:</span>
          <span className="info-value">{employee.email}</span>
        </div>

        {employee.phone && (
          <div className="info-row">
            <FaPhone className="info-icon" />
            <span className="info-label">Phone:</span>
            <span className="info-value">{employee.phone}</span>
          </div>
        )}

        {employee.department && (
          <div className="info-row">
            <FaBuilding className="info-icon" />
            <span className="info-label">Department:</span>
            <span className="info-value">{employee.department}</span>
          </div>
        )}

        {employee.position && (
          <div className="info-row">
            <FaBriefcase className="info-icon" />
            <span className="info-label">Position:</span>
            <span className="info-value">{employee.position}</span>
          </div>
        )}

        {employee.salary && (
          <div className="info-row">
            <span className="info-label">Salary:</span>
            <span className="info-value salary">{formatSalary(employee.salary)}</span>
          </div>
        )}

        {employee.hire_date && (
          <div className="info-row">
            <FaCalendar className="info-icon" />
            <span className="info-label">Hire Date:</span>
            <span className="info-value">{formatDate(employee.hire_date)}</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        <button
          className="btn btn-warning btn-sm"
          onClick={() => onEdit(employee)}
        >
          <FaEdit /> Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(employee.id)}
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;

