import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To UBIT Book Library');
  });

app.listen(PORT, () => {
    console.log('App is Listening to port: ' + PORT);
})

mongoose.connect(mongodbURL)
.then(() => {
console.log("Mongodb Connected")
})
.catch((error) => {
    console.log(error)
})