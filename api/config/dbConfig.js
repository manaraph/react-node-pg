require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.USER || 'me',
  host: process.env.HOST || 'localhost',
  database: process.env.DB || 'react_node_pg',
  password: process.env.PASSWORD || 'password',
  port: process.env.DBPORT || 5432,
});

module.exports = pool;
