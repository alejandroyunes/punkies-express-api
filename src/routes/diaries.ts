import express from "express"
import * as diaryServices from '../services/diaryServices'
import userSchema from "../models/user";

const router = express.Router();

router.get("/", (_, res) => {
  res.send(diaryServices.getEntriesWithoutSentitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary !== null) ? res.send(diary) : res.sendStatus(404)
})

router.post("/post", (req, res) => {
  console.log(req.body)
  const user = new userSchema(req.body)
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});


export default router