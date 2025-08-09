import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.port
const url = process.env.mongoURL


//--- Connection----------

mongoose.connect(url).then(
    ()=>{
        app.listen(port,()=>{
            console.log(`Server is running in ${port}`);
        })
    }
)
.catch(
    (err) => {
        console.log('Database connection failed due to ',err);
        process.exit(1);
    }
)


const schema = new mongoose.Schema(
    {url:String}, {collection:"gallery_images"}
);

const datamodel = mongoose.model("gallery_images",schema);

//-------------Get data--------------

app.get("/",async(req,res) =>{
            const imageUrl = await datamodel.find();
            console.log(imageUrl);
            // res.json({message:"Hello"});
            res.json(imageUrl);
}
);


