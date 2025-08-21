const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        product_id:{type:Number},
        product_name:{type:String},
        product_type:{type:String},
        qty:{type:Number},
        price:{type:Number},
        product_image:{type:String}

    }
)

const Products =  mongoose.model('Product',ProductSchema)


module.exports = Products
