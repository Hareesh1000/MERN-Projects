const express = require('express');
const router = express.Router();

const Order = require('../controllers/OrderController');


router.post('/',Order.placeOrder)

router.get('/:id',Order.getOrder)

module.exports = router