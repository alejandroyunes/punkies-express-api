import express from 'express'
import * as blogServices from '../services/blogServices'

const blogRouter = express.Router()

blogRouter.get('/brief', async (req, res) => {
  const blog = await blogServices.getBlogsBrief(req)
  res.send(blog)
})

blogRouter.get('/:id', async (req, res) => {
  const blog = await blogServices.getBlogsOrBlogsByCategory(req)
  const comment = await blogServices.getComments(req.params.id)
  res.send({ blog, comment })
})

blogRouter.post('/comment', async (req, res) => {

  try {
    const comment = await blogServices.postCommentBlog(req, res)
    return comment
  } catch (err) {
    return err
  }
})

blogRouter.post('/newBlog', async (req, res) => {

  try {
    const comment = await blogServices.postBlog(req, res)
    return comment
  } catch (err) {
    return err
  }
})


// blogArray.forEach(e => {
//   const blog = new BlogSchema(e)
//   return blog.save()
// })


// commentArray.forEach(e => {
//   const blog = new CommentSchema(e)
//   return blog.save()
// })

export default blogRouter
