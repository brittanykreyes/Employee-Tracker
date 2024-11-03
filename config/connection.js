const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'your_username',  // Replace with your PostgreSQL username
    password: 'your_password',  // Replace with your PostgreSQL password
    database: 'employee_db',  // Replace with your database name
    port: 5432,
});

module.exports = pool;
