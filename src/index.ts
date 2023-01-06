require('dotenv').config()

import express from "express";
import mongoose from "mongoose";

import diaryRouter from './routes/diaries'

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;


app.get("/ping", (_, res) => {
  console.log("someone pined");
  res.send("pong poing");
});

app.use('/api/diaries', diaryRouter)

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => console.log('conected to the database'))
  .catch((error) => console.log(error))

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
