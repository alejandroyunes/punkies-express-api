import categorySchema from '../models/categories'
import { Request } from 'express';
import { Types } from 'mongoose';
const CommentSchema = require('../models/comments')
const BlogSchema = require('../models/blog')

interface QueryParams {
  limit?: number;
  page?: number;
}

interface Category {
  category: String,
  description: String,
}

interface BlogBriefResult {
  slug: string;
  category: Types.ObjectId | Category;
  title: string;
  brief: string;
  description: string;
  date: Date;
  dateString: string;
  year: string;
}

export const getBlogsBrief = (req: Request<any, any, any, QueryParams>): Promise<BlogBriefResult> => {
  const limit = req.query.limit || 10
  const page = req.query.page || 1

  const result = BlogSchema.paginate({},
    {
      limit: limit,
      page: page,
      populate: 'category',
      sort: { date: -1 }
    })
  return result
}

export const getBlogsOrBlogsByCategory = async (req: any) => {

  const blogsByCategory = await categorySchema.findById(req.params.id).exec()

  if (blogsByCategory) {
    const limit = req.query.limit || 2
    const page = req.query.page || 1
    const id = req.params.id

    const categoryBlogs = await BlogSchema.paginate(
      {
        category: id
      },
      {
        limit: limit,
        page: page,
        populate: 'category',
        sort: { date: -1 }
      })
    return categoryBlogs
  }
  const blog = await BlogSchema.findById(req.params.id)
  return blog
}

export const getComments = async (id: any) => {
  const comment = await CommentSchema.find({ blogId: id }).populate('comment').exec()
  return comment
}

export const postCommentBlog = async (req: any, res: any) => {

  try {
    const comment = new CommentSchema(req.body)
    const savedComment = await comment.save()

    res.status(200).json({ message: 'ok' });
    res.send(savedComment)
  } catch (err) {
    res.send(err)
  }
}

export const postBlog = async (req: any, res: any) => {

  try {
    const newBlog = new BlogSchema(req.body)
    const savedComment = await newBlog.save()

    res.status(200).json({ message: 'ok' });
    res.send(savedComment)
  } catch (err) {
    res.send(err)
  }
}
