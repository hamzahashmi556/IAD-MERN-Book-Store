import express, { request, response } from "express";
import cors from "cors";
import { PORT, mongodbURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'

const app = express();

// Middleware for parsing request body
app.use(express.json());
//Middleware for handling CORS policy
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To UBIT Book Library');
  });
app.use('/books', booksRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongoose Error " + error.message);
  });