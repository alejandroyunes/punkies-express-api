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

  try {
    const comment = new CommentSchema(req.body)
    const savedComment = await comment.save()

    res.status(200).json({ message: 'ok' });
    res.send(savedComment)
  } catch (err) {
    res.send(err)
  }
}
