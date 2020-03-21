const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'react_node_pg',
  password: 'password',
  port: 5432,
});

const getMerchants = () => {
  return new Promise( (resolve, reject) => {
    pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
      if(error) {
        reject(error);
      }  
      resolve(results.rows);
    });
  });
};

const createMerchant = (body) => {
  return new Promise((resolve, reject) => {
    const { name, email } = body;
    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if(error) {
        reject(error);
      }
      console.log(results.rows[0]);
      resolve(`A new merchant has been added: ${results.rows[0]}`);
    });
  });
};

const deleteMerchant = () => {
  return new Promise((resolve, reject) => {
    const id = parseInt(request.params.id);
    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if(error) {
        reject(error);
      }
      resolve(`Merchant deleted with ID: ${id}`);
    });
  });
};

module.exports = {
  getMerchants,
  createMerchant,
  deleteMerchant,
}

