import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express"; // "type": "module"
import moviesRouter from "./router/movies.router.js"
import cors from "cors"


// hi
import { MongoClient } from "mongodb";

console.log(process.env.MONGO_URL);

const PORT = process.env.PORT;
// const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

// const PORT = 4000;
// const PORT = process.env.PORT;
// const MONGO_URL = "mongodb://127.0.0.1";

// .env -> environment variable
const MONGO_URL = process.env.MONGO_URL;

 export const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.get("/", function (request, response) {
  response.send("hi this is home page");
});



app.use('/movies',moviesRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));










// git remote add origin https://github.com/zyedibrahim/mongodbnodepushonline.git
// git branch -M main
// git push -u origin main

