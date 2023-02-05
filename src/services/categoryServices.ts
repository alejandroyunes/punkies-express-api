// import Blog from '../models/blog'
import categorySchema from '../models/categories'

export const getBlogsByCategory = (category: any): any => {
  return categorySchema.find(category).populate('Blog', { title: 1, brief: 1 })
}
