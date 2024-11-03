const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'kaylinjae14!!!',  // Replace with your PostgreSQL password
    database: 'employee_db',  // Replace with your database name
    port: 5432,
});

module.exports = pool;
