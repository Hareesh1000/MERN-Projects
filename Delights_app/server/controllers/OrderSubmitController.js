const express = require('express')

const placeOrder = async(req,res)=>{

    const data= req.body;

    console.log(`Data received from Cart is `, JSON.stringify(data));
}

module.exports = placeOrder;
