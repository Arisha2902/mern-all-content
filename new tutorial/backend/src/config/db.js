import mongoose from "mongoose"
export const connectDB = async () =>{
    try{
     await mongoose.connect(process.env.monogo_url); 
     
     console.log("mongodb connected")
    }catch (error) {
    console.log("error connecting to mongodb", error);
    }
};