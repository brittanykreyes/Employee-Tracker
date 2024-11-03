const pool = require('../config/connection');

const dbQueries = {
    getDepartments: () => {
        return pool.query('SELECT * FROM department');
    },
    getRoles: () => {
        return pool.query('SELECT role.id, title, salary, department.name AS department FROM role JOIN department ON role.department_id = department.id');
    },
    getEmployees: () => {
        return pool.query(`SELECT employee.id, first_name, last_name, role.title, department.name AS department, role.salary, manager.first_name AS manager
                           FROM employee
                           JOIN role ON employee.role_id = role.id
                           JOIN department ON role.department_id = department.id
                           LEFT JOIN employee AS manager ON employee.manager_id = manager.id`);
    },
    addDepartment: (name) => {
        return pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
    },
    addRole: (title, salary, department_id) => {
        return pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
    },
    addEmployee: (first_name, last_name, role_id, manager_id) => {
        return pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
    },
    updateEmployeeRole: (employee_id, role_id) => {
        return pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
    },
};

module.exports = dbQueries;
