const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const uri = 'mongodb://localhost:27017';
const dbName = 'billing_app';
const collectionName = 'products';


let collection;
let ordersCollection;

async function connectDB() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log(' Connected to MongoDB');
  const db = client.db(dbName);
  collection = db.collection(collectionName);
  ordersCollection = db.collection('orders');
}

app.get('/', async (req, res) => {
  try {
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error(' Failed to fetch data:', err);
    res.status(500).send('Failed to fetch data');
  }
});

///--- To identify the item type from the drop down
app.get('/item_type/:item_type', async (req, res) => {
  try {
    const { item_type } = req.params;
    const data = await collection.find( {item_category:item_type} ).toArray();
    res.json(data);
  } catch (err) {
    console.error(' Failed to fetch data:', err);
    res.status(500).send('Failed to fetch data');
  }
});


///-----------------------Submit the order ---------------------------

app.post('/', async (req, res) => {
  try {
    const { order } = req.body; 

    await ordersCollection.insertMany(order); 

    res.status(201).json({ message: 'Order saved successfully' });
  } catch (err) {
    console.error("Error occurred while saving order:", err);
    res.status(500).json({ message: 'Server error' });
  }
});


connectDB().then(() => {
  app.listen(port, () => {
    console.log(` Server running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error(' MongoDB connection failed:', err);
});
