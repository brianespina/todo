require('dotenv').config();
const {DB, DB_HOST, DB_PASS, DB_PORT, DB_USER} = process.env;
console.log(DB_HOST)
const Pool = require("pg").Pool;

const pool = new Pool({
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    post: DB_PORT,
    database: DB
});

module.exports = pool;