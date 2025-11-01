const mysql = require('mysql2/promise');
require('dotenv').config();

require('dotenv').config();
const connection = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    charset: 'utf8mb4',
});


module.exports = connection;