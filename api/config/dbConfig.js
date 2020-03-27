const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'react_node_pg',
  password: 'password',
  port: 5432,
});

module.exports = pool;