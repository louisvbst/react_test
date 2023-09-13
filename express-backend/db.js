const { Pool } = require('pg');

const pool = new Pool({
  user: 'odoo',
  host: 'localhost',
  database: 'test_react',
  password: 'odoo',
  port: 5432,
});

module.exports = pool;
