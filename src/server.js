const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Todo = require("../Models/TodoModel");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>hello world</h1>`);
});

app.get("/blog", (req, res) => {
  res.send(`<h1>hello my blog world again</h1>`);
});

app.get("/:id", (req, res) => {
  res.send(`<h1>hello world ${req.params.id}</h1>`);
});

app.post("/todo", async(req, res) => {
  // console.log(req.body)
  // res.send(req.body)
  try {
    // console.log(req.body);
    // res.send(req.body);
    const todo=await Todo.create(req.body)
    res.status(200).json(todo)
  } 
  catch (error) 
  {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
// app.listen(PORT,()=>{
//     console.log(`server running on http://localhost:${PORT}`)
// })

mongoose
  .connect(
    "mongodb+srv://admin:admin@dev-izaan-cluster.8rnz3o6.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoose");
    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
