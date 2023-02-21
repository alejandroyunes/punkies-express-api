import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  category: String,
  description: String,
})

categorySchema

export default mongoose.model('Category', categorySchema)
