const inquirer = require('inquirer');
const dbQueries = require('./lib/dbQueries');

const mainMenu = async () => {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ],
    });

    switch (action) {
        case 'View all departments':
            const departments = await dbQueries.getDepartments();
            console.table(departments.rows);
            break;
        case 'View all roles':
            const roles = await dbQueries.getRoles();
            console.table(roles.rows);
            break;
        case 'View all employees':
            const employees = await dbQueries.getEmployees();
            console.table(employees.rows);
            break;
        case 'Add a department':
            const { departmentName } = await inquirer.prompt({
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:'
            });
            await dbQueries.addDepartment(departmentName);
            console.log(`Department '${departmentName}' added.`);
            break;
        case 'Add a role':
            const { roleTitle, salary, departmentId } = await inquirer.prompt([
                { type: 'input', name: 'roleTitle', message: 'Enter the role title:' },
                { type: 'input', name: 'salary', message: 'Enter the salary:' },
                { type: 'input', name: 'departmentId', message: 'Enter the department ID:' }
            ]);
            await dbQueries.addRole(roleTitle, salary, departmentId);
            console.log(`Role '${roleTitle}' added.`);
            break;
        case 'Add an employee':
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: 'input', name: 'firstName', message: 'Enter first name:' },
                { type: 'input', name: 'lastName', message: 'Enter last name:' },
                { type: 'input', name: 'roleId', message: 'Enter role ID:' },
                { type: 'input', name: 'managerId', message: 'Enter manager ID (leave blank if none):' }
            ]);
            await dbQueries.addEmployee(firstName, lastName, roleId, managerId || null);
            console.log(`Employee '${firstName} ${lastName}' added.`);
            break;
        case 'Update an employee role':
            const { empId, newRoleId } = await inquirer.prompt([
                { type: 'input', name: 'empId', message: 'Enter employee ID to update:' },
                { type: 'input', name: 'newRoleId', message: 'Enter new role ID:' }
            ]);
            await dbQueries.updateEmployeeRole(empId, newRoleId);
            console.log(`Employee ID '${empId}' updated to new role ID '${newRoleId}'.`);
            break;
        case 'Exit':
            process.exit();
            break;
    }
    mainMenu();
};

mainMenu();
