const mysql = require('mysql2');
require('dotenv').config();
// const connection = mysql.createConnection({
//     host: process.env.DB_HOSTNAME,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD
// });
require('dotenv').config();
const connection = mysql.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = connection;