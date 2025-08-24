const express = require('express');
const connectDB = require('./config/db');
const productRoute = require('./routes/productRoutes')
const ordersRoute = require('./routes/OrdersRoute');
const userRoute = require('./routes/UserRoute')
const cors = require('cors')

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', productRoute);
app.use('/cart',ordersRoute)
app.use('/user',userRoute)


const startServer = async() =>{
  try{
    await connectDB();
    app.listen(PORT,()=>{
      console.log(`Server is running in the port ${PORT}`);
    })
  }
  catch(err){
    console.log(`Error occured due to: ${err}`)
  }

}



startServer();
