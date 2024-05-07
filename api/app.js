const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const Todo = require("./Todo")

dotenv.config()

console.log(process.env.PORT)
console.log(process.env.DB)

mongoose
  .connect(process.env.DB)
  .then(() => console.log("Mongodb is connected"))
  .catch((err) => console.log(err))
//

app.use(express.json())
app.use(cors())

const getData = async () => {
  const data = await Todo.find()
  console.log(data)
}

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

getData()

app.get("/", async (req, res) => {
  const data = await Todo.find()
  res.status(200).json(data)
})
app.post("/", async (req, res) => {
  console.log(req.body)
  const data = await Todo.create({ text: req.body.text })
  res.status(201).json(data)
})
app.delete("/:todoId", async (req, res) => {
  console.log(req.params.todoId)
  await Todo.findByIdAndDelete(req.params.todoId)
  return res.status(204).json({})
})
