INSERT INTO department (depName) VALUES ('Administration');
INSERT INTO department (depName) VALUES ('Finance');
INSERT INTO department (depName) VALUES ('Quality');
INSERT INTO department (depName) VALUES ('Risk');
INSERT INTO department (depName) VALUES ('Human Resources');

INSERT INTO roles (title, salary, departmentID) VALUES ("CEO", 120.5, 1);
INSERT INTO roles (title, salary, departmentID) VALUES ("Accountant", 50.0, 2);
INSERT INTO roles (title, salary, departmentID) VALUES ("QA Analyst", 40.5, 3);
INSERT INTO roles (title, salary, departmentID) VALUES ("Manager", 100.5, 4);
INSERT INTO roles (title, salary, departmentID) VALUES ("Auditor", 32.5, 5);

INSERT INTO employee (first_name, last_name, rolesID) VALUES("Jimmy", "Hoffa", 1);
INSERT INTO employee (first_name, last_name, rolesID) VALUES("Ben", "Affleck", 2);
INSERT INTO employee (first_name, last_name, rolesID) VALUES("Gabi", "Bonita", 3);
INSERT INTO employee (first_name, last_name, rolesID) VALUES("Jim", "Gaffigan", 4);
INSERT INTO employee (first_name, last_name, rolesID) VALUES("Harvey", "Weinstein", 5);