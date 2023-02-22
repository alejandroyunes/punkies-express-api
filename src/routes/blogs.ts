import express from 'express'
import categorySchema from '../models/categories'
import * as blogServices from '../services/blogServices'

const BlogSchema = require('../models/blog')
import commentArray from '../data/comments.json'

// import blogSchema from '../models/blog'
import blogArray from '../data/blogs.json'

const blogRouter = express.Router()

blogRouter.get('/brief', async (req, res) => {
  const blog = await blogServices.getBlogsBrief(req)
  res.send(blog)
})

blogRouter.get('/:id', async (req, res) => {
  const blog = await blogServices.getBlogsOrBlogsByCategory(req.params.id)
  const comment = await blogServices.getComments(req.params.id)
  res.send({ blog, comment })
})

blogRouter.post('/comment', async (req, res) => {
  blogServices.postCommentBlog(req, res)
})

// blogRouter.patch('/patch', async (req, _) => {
//   const comment = await blogServices.blogPatchComment(req, _)

//   return comment
// })

// blogArray.forEach(e => {
//   const blog = new BlogSchema(e)
//   return blog.save()
// })


// commentArray.forEach(e => {
//   const blog = new CommentSchema(e)
//   return blog.save()
// })

export default blogRouter
