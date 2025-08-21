const express = require('express');
const getallProducts = require('../controllers/ProductContoller');
const router = express.Router();

router.get('/',getallProducts);


module.exports = router;