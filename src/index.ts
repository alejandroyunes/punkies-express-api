require('dotenv').config()

import express from 'express'
import mongoose from 'mongoose'
const cors = require('cors')

import blogRouter from './routes/blogs'
import categoriesRouter from './routes/categories'

const connectToMongoose = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}`)
    console.log('connected to the server')
  } catch (error) {
    console.log(error)
  }
}

connectToMongoose()

const app = express()
app.use(express.json())
app.use(cors())
const port = 3001

app.use('/blog', blogRouter)
app.use('/category', categoriesRouter)

mongoose.set('strictQuery', true)
mongoose.set('strictPopulate', true)

app.listen(port, () => {
  console.log(`Server Running`)
})
