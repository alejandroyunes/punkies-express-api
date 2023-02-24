import express from 'express'
import categorySchema from '../models/categories'

// import jsonfile from '../data/categories.json'

const categoryRouter = express.Router()

categoryRouter.get('/', async (_, res) => {
  const categories = await categorySchema.find()
  res.send(categories)
})

// jsonfile.forEach(e => new categorySchema(e).save())

// router.get('/:category', async (req, res) => {
//   const category = await categoryServices.getBlogsByCategory(req.params.category)
//   return res.send(category)
// })



export default categoryRouter
