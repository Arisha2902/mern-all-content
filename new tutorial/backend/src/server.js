// const express = require("express")
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();
// console.log(process.env.monogo_url); 

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

// middleware
app.use(express.json())
app.use(rateLimiter)

// simple middleware
// app.use((req,res,next) => {
//     console.log("we just got a new req")
//     console.log(`${req.method} & url is ${req.url}`)
//     next();
// })

app.use("/api/notes", notesRoutes);

// app.get("/api/notes" , (req,res) => {
// res.send("you got your notes there");
// });


app.listen(5000, () => {
    console.log("server has started on port :" , PORT);
})