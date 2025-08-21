
const mongoose = require('mongoose');

url = "mongodb://127.0.0.1:27017/delights"

const connectDB = async () =>{

    try{
        const connection = await mongoose.connect(url, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log('Database is connected');
    }

    catch(error){
        console.log(`error:${error}`);
    }

};

module.exports=connectDB;

