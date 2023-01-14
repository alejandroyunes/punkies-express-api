require('dotenv').config()

import express from "express";
import mongoose from "mongoose";
const cors = require('cors')

import diaryRouter from './routes/diaries'
import blogRouter from './routes/blogs'


mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => console.log('connected to the server'))
  .catch((error) => console.log(error))



const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3001;


app.get("/ping", (req, res) => {
  console.log("someone pined");
  res.send(req.body);
});

app.use('/api/diaries', diaryRouter)
app.use('/blog', blogRouter)


mongoose.set("strictQuery", false);

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => console.log('conected to the database'))
  .catch((error) => console.log(error))


app.listen(port, () => {
  console.log(`Server Running`);
});
