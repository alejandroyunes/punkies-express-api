import express from 'express'
// import * as categoryServices from '../services/categoryServices'
import categorySchema from '../models/categories'

// import jsonfile from '../data/categories.json'

const categoryRouter = express.Router()


categoryRouter.get('/', async (_, res) => {
  const categories = await categorySchema.find()
  res.send(categories)
})

categoryRouter.get('/blog/:id', async (_, res) => {
  // const blog = await blogSchema.findById(req.params.id).populate('category')
  res.send('blog')
})


// jsonfile.forEach(e => new categorySchema(e).save())

// router.get('/:category', async (req, res) => {
//   const category = await categoryServices.getBlogsByCategory(req.params.category)
//   return res.send(category)
// })



// const newEntry = new categorySchema(
//   {
//     "category": "Koanes todo el día",
//     "categoryTitle": "Documentos públicos para que cualquiera pueda acceder a ellos."
//   },
// )

// newEntry.save().then(() => console.log('data added'))

export default categoryRouter
