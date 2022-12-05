const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST_TEST,
    port: process.env.DB_PORT_TEST,
    user: process.env.DB_USER_TEST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS_TEST
})
module.exports = pool.promise()