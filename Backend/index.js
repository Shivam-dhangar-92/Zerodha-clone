import express from "express";

const app=express();

import 'dotenv/config';

import mongoose from "mongoose";

import router from "./routes/routes.js";

const Port=process.env.PORT || 4500

import bodyParser from "body-parser";

import cors from 'cors'

app.use(cors())

app.use(bodyParser.json())

app.listen(Port,()=>{
    console.log("Master is here");
    mongoose.connect(process.env.MONGOURL)
})

app.use("/api/v4/get-data",router);