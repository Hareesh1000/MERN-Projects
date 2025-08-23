const express = require('express');
const router = express.Router();

const placeOrder = require('../controllers/OrderSubmitController');


router.post('/',placeOrder)

module.exports = router