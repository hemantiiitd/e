-- Create database
CREATE DATABASE IF NOT EXISTS employee_management;
USE employee_management;

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
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

-- Insert sample data
INSERT INTO employees (employee_id, first_name, last_name, email, phone, department, position, salary, hire_date, status) VALUES
('EMP001', 'John', 'Doe', 'john.doe@company.com', '555-0101', 'IT', 'Software Engineer', 75000.00, '2022-01-15', 'active'),
('EMP002', 'Jane', 'Smith', 'jane.smith@company.com', '555-0102', 'HR', 'HR Manager', 65000.00, '2021-03-20', 'active'),
('EMP003', 'Michael', 'Johnson', 'michael.j@company.com', '555-0103', 'Finance', 'Accountant', 60000.00, '2022-06-10', 'active'),
('EMP004', 'Emily', 'Brown', 'emily.brown@company.com', '555-0104', 'IT', 'DevOps Engineer', 80000.00, '2021-11-05', 'active'),
('EMP005', 'David', 'Wilson', 'david.wilson@company.com', '555-0105', 'Marketing', 'Marketing Specialist', 55000.00, '2023-02-14', 'active');

