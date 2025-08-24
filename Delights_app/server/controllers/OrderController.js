const Order = require('../models/orders');

const placeOrder = async (req, res) => {
  const data = req.body;

  console.log(`Data received from Cart is`, JSON.stringify(data));

  try {
    const newOrder = new Order(data);
    await newOrder.save();  

    res.status(201).json({
      message: "Order received and saved successfully",
    });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: "Failed to save order", error: error.message });
  }
};

const getOrder = async(req,res)=>{

  console.log(`parameter is `,req.params.id)

   const userOrders = await Order.find({ customer_id: req.params.id }).sort({order_date:-1});

    if(userOrders){
      res.status(200).json(userOrders);
    }
    else {
      res.status(400).message('request is not processed')
    }
}


module.exports = {placeOrder,getOrder};
