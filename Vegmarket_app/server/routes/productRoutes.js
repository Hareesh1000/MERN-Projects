const express = require('express');
const getallProducts = require('../controllers/ProductContoller');
const getProductTypes = require('../controllers/ProductTypesController')
const router = express.Router();

router.get('/',getallProducts);

router.get('/product-type/:product',getProductTypes);


module.exports = router;