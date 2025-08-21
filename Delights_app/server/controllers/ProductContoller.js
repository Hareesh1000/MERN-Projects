const Products = require('../models/Product');

const getallProducts = async (req,res)=>{
    
    const allProducts = await Products.find();
    res.status(200).json(allProducts);
};


module.exports = getallProducts;