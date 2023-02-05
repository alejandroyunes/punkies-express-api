import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  category: String,
  description: String,
})

export default mongoose.model('Category', categorySchema)
