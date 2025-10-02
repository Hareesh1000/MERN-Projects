const productModel = require('../models/Product');

async function getProducts(req, res) {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getProducts };
