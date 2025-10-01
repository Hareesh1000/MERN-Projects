const Products = require('../models/Product');

const getProductTypes = async (req,res)=>{
    const product = req.params.product
    
    const allProducts = await Products.find({product_type:product});
    res.status(200).json(allProducts);
};


module.exports = getProductTypes;