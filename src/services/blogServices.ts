
import mongoose from 'mongoose'
import categorySchema from '../models/categories'
const CommentSchema = require('../models/comments')
const BlogSchema = require('../models/blog')

export const getBlogsBrief = (req) => {
  const limit = req.query.limit || 10
  const page = req.query.page || 1

  const result = BlogSchema.paginate({}, { limit: limit, page: page, populate: 'category', sort: { date: -1 } })
  return result
}

export const getBlogsOrBlogsByCategory = async id => {
  const blogsByCategory = await categorySchema.findById(id).exec()

  if (blogsByCategory) {
    const blogs = await BlogSchema.find({ category: id }).populate('category').sort({ date: 'desc' }).limit(10).exec()
    return blogs
  }
  const blog = await BlogSchema.findById(id)
  return blog
}

export const getComments = async id => {
  const comment = await CommentSchema.find({ blogId: id }).populate('comment').exec()
  // const comment = await CommentSchema.paginate({}, { limit: 10, page: 1, populate: 'blogId', sort: { date: -1 } })

  return comment
}

export const postCommentBlog = async (req, res) => {

  res.send('hit')

  const comment = new CommentSchema(req.body)

  try {
    const savedComment = await comment.save()
    res.status(200).json({ message: 'ok' });
    return savedComment
  } catch (err) {
    res.status(err)
  }
}


// export const blogPatchComment = (req, res) => {

//   console.log(req.body.comment)
// }

// Room.find({}).sort('-date').exec((err, docs) => { ... });
// Room.find({}).sort({date: -1}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'desc'}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'descending'}).exec((err, docs) => { ... });
// Room.find({}).sort([['date', -1]]).exec((err, docs) => { ... });
// Room.find({}, null, {sort: '-date'}, (err, docs) => { ... });
// Room.find({}, null, {sort: {date: -1}}, (err, docs) => { ... });
// Room.find({}).sort({date: -1}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'desc'}).exec((err, docs) => { ... });
// Room.find({}).sort({date: 'descending'}).exec((err, docs) => { ... });
// Room.find({}).sort([['date', -1]]).exec((err, docs) => { ... });
// Room.find({}, null, {sort: '-date'}, (err, docs) => { ... });
// Room.find({}, null, {sort: {date: -1}}, (err, docs) => { ... });