const connectDB = require('../config/db');

async function getAllProducts() {
  const pool = await connectDB();
  const connection = await pool.getConnection();
  try {
    const result = await connection.execute(`SELECT * FROM products`);
    return result.rows;
  } finally {
    await connection.close();
  }
}

module.exports = { getAllProducts };
