import categorySchema from '../models/categories'
const CommentSchema = require('../models/comments')
const BlogSchema = require('../models/blog')

export const getBlogsBrief = (req) => {
  const limit = req.query.limit || 10
  const page = req.query.page || 1

  const result = BlogSchema.paginate({}, { limit: limit, page: page, populate: 'category', sort: { date: -1 } })
  return result
}

export const getBlogsOrBlogsByCategory = async (req) => {

  const blogsByCategory = await categorySchema.findById(req.params.id).exec()

  if (blogsByCategory) {

    const limit = req.query.limit || 2
    const page = req.query.page || 1
    const id = req.params.id

    const categoryBlogs = await BlogSchema.paginate({ category: id }, { limit: limit, page: page, populate: 'category', sort: { date: -1 } })
    return categoryBlogs
  }
  const blog = await BlogSchema.findById(req.params.id)
  return blog
}

export const getComments = async id => {
  const comment = await CommentSchema.find({ blogId: id }).populate('comment').exec()
  return comment
}

export const postCommentBlog = async (req, res) => {

  try {
    const comment = new CommentSchema(req.body)
    const savedComment = await comment.save()

    res.status(200).json({ message: 'ok' });
    res.send(savedComment)
  } catch (err) {
    res.send(err)
  }
}

export const postBlog = async (req, res) => {

  try {
    const newBlog = new BlogSchema(req.body)
    const savedComment = await newBlog.save()

    res.status(200).json({ message: 'ok' });
    res.send(savedComment)
  } catch (err) {
    res.send(err)
  }
}
