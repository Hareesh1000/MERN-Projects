const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');

const productRoute = require('./routes/productRoutes');
// const ordersRoute = require('./routes/ordersRoute');
// const userRoute = require('./routes/userRoute');

const PORT = 8000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/products', productRoute);

// Start server after DB connection
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(`Error occurred: ${err}`);
  }
};

startServer();
