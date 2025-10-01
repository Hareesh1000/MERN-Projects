
const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const oracledb = require('oracledb');
// // Import routes
// const productRoute = require('./routes/productRoute');
// const ordersRoute = require('./routes/ordersRoute');
// const userRoute = require('./routes/userRoute');


const PORT = 8000;
const app = express();

// Middleware
app.use(cors());         
app.use(express.json());  

// Routes
// app.use('/products', productRoute);
// app.use('/cart', ordersRoute);
// app.use('/user', userRoute);
// app.use('/my-orders', ordersRoute);

// Start server after DB connection
const startServer = async () => {
  try {
    await connectDB(); // connect to Oracle DB
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(`Error occurred: ${err}`);
  }
};

startServer();
