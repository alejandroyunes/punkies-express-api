require('dotenv').config()

import express from 'express'
import mongoose from 'mongoose'
const cors = require('cors')

import diaryRouter from './routes/diaries'
import blogRouter from './routes/blogs'
import categoriesRouter from './routes/categories'

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => console.log('connected to the server'))
  .catch(error => console.log(error))

const app = express()
app.use(express.json())
app.use(cors({
  origin: '*'
}));
const port = 3001

app.use('/api/diaries', diaryRouter)
app.use('/blog', blogRouter)
app.use('/category', categoriesRouter)

mongoose.set('strictQuery', false)
mongoose.set('strictPopulate', false)

app.listen(port, () => {
  console.log(`Server Running`)
})
