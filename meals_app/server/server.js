import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from cors

const app =express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.port;
const url = process.env.url;


////----Connection-----------

mongoose.connect(URL).then(
    app.listen(port,
        ()=>{console.log(`Server is running in ${port}`)}
    )
).catch(
    (e)=>{console.log(`Exception due to ${err}`)
    process.exit(1);
}
)

const schema = mongoose.Schema(
    {url:String},{collection:""}
);

const datamodel = mongoose.model("")