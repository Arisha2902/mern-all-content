// const express = require("express")
import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes);

// app.get("/api/notes" , (req,res) => {
// res.send("you got your notes there");
// });


app.listen(5000, () => {
    console.log("server has started")
})