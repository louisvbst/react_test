const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todo_list');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Add more routes as needed...

module.exports = router;
