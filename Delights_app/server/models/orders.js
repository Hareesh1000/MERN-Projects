const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product_id: { type: Number, },
    product_name: { type: String, },
    product_type: { type: String, },
    qty: { type: Number, },
    price: { type: Number, },
    order_qty: { type: Number, }
});

const orderSchema = new mongoose.Schema({
    customer_id: { type: Number, },
    order: { type: [orderItemSchema], },
    total_spent: { type: Number, },
    order_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
