INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES 
('Sales Manager', 80000, 1),
('Software Engineer', 70000, 2),
('Marketing Specialist', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Emily', 'Johnson', 3, 1);
