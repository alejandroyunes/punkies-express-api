import mongoose, { Schema } from 'mongoose'
const mongoosePaginate = require('mongoose-paginate-v2');

const blogSchema = new Schema({
  slug: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  title: String,
  brief: String,
  description: String,
  date: Date,
  dateString: String,
  year: String,
})

blogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Blog', blogSchema)

