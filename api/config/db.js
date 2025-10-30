import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongooose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully")
    }
    catch(error){
        console.error("MongoDB connection failed:", error);
    }
}