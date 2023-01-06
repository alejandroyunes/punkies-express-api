import express from 'express'
import blogSchema from "../models/blog";
// import blogData from '../services/blogs.json'

const router = express.Router()

router.get('/', (_, res) => {
    res.send('something got here sfasf')
})

router.post("/post", (req, res) => {
    const user = new blogSchema(req.body)
    user.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});


const newEntry = new blogSchema({description: 'hello', date: "new day"})

newEntry.save().then(() => console.log('meow check'))


export default router