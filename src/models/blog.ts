import mongoose, { Schema } from 'mongoose'

// const blogSchema = new Schema({
//   slug: {
//     type: String,
//     required: true
//   },
//   category: {
//     type: String,
//     required: true
//   },
//   title: {
//     type: String,
//     required: true
//   },
//   brief: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   dateString: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     required: true
//   },
//   year: {
//     type: String,
//     required: true
//   }
// })

// export default mongoose.model('blog', blogSchema)

const blogSchema = new Schema({
  slug: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  title: String,
  brief: String,
  description: String,
  date: Date,
  dateString: String,
  year: String
})

export default mongoose.model('Blog', blogSchema)
