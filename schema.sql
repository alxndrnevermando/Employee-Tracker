DROP DATABASE IF EXISTS employees_DB;
CREATE database employees_DB;

USE employees_DB;

CREATE TABLE department (
  departmentID INT NOT NULL AUTO_INCREMENT,
  depName VARCHAR(100) NULL,
  PRIMARY KEY (departmentID)
);

CREATE TABLE roles (
  rolesID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL NULL,
  departmentID INT,
  PRIMARY KEY (rolesID),
  FOREIGN KEY (departmentID) REFERENCES department(departmentID)
);

CREATE TABLE employee (
  employeeID INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  rolesID INT,
  PRIMARY KEY (employeeID),
  FOREIGN KEY (rolesID) REFERENCES roles(rolesID)
);

SELECT * FROM department;
select * from roles;
SELECT * FROM employee;
