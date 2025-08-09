import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

//-------------------------Set------------------------------------------//
const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT 
const MONGOURL = process.env.MONGO_URL;
app.use(express.json());


//------------------------Connect--------------------------------------------//

// Connect to MongoDB 
mongoose.connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed.", err);
    process.exit(1); 
  });

  const userSchema = new mongoose.Schema({
  todo_item: String,
}, {
  collection: 'mytodolist'
});


const UserModel = mongoose.model("mytodolist", userSchema);



//-------------------------------Get----------------------------------//

app.get("/dummy", async (req, res) => {
  try {  
    const userData = await UserModel.find();
    res.json(userData);
    // res.json({message:"Hello"});
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});


// app.listen(5000,()=>{
//     console.log('server started')
// })


//-------------------------------Post----------------------------------//


app.post("/dummy", async (req, res) => {
  try {
    const { todo_item } = req.body;

    if (!todo_item || todo_item.trim() === "") {
      return res.status(400).json({ error: "Todo item cannot be empty" });
    }

    const newItem = new UserModel({ todo_item });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add todo item" });
  }
});

//-------------------------------Post----------------------------------//
app.delete("/dummy/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndDelete(id);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

