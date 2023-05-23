const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Todo = require("../Models/TodoModel");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// app.get("/", (req, res) => {
//   res.send(`<h1>hello world</h1>`);
// });

// app.get("/blog", (req, res) => {
//   res.send(`<h1>hello my blog world again</h1>`);
// });

// app.get("/:id", (req, res) => {
//   res.send(`<h1>hello world ${req.params.id}</h1>`);
// });

//get all data
app.get("/todo", async (req, res) => {
  try {
    const todos=await Todo.find({})//empty curly brackets will get all data
    res.status(200).json(todos)
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get data by id
app.get("/todo/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const todo=await Todo.findById(id)
        res.status(200).json(todo)
    }catch(error)
    {
    console.log(error.message);
    res.status(500).json({ message: error.message });
    }
})

//adding data to database 
app.post("/todo", async (req, res) => {
  // console.log(req.body)
  // res.send(req.body)
  try {
    // console.log(req.body);
    // res.send(req.body);
    const todo = await Todo.create(req.body); //data has been added to the database
    res.status(200).json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update by id
app.put("/todo/:id",async(req,res)=>{
try{
    const {id}=req.params
    const todo=await Todo.findByIdAndUpdate(id,req.body)
    //we cannot find any product in database
    if(!todo){
        return res.status(404).json({ message: `cannot find any todo with id ${id}` });
    }
    const updatedTodo=await Todo.findById(id)
    res.status(200).json(updatedTodo)
}
catch(error){
    console.log(error.message);
    res.status(500).json({ message: error.message });
}
})

//delete todo by id
app.delete("/todo/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id);
        if(!todo)
        {
            return res.status(404).json({message:`cannot find any todo with id ${id}`})
        }
        res.status(200).json(todo)
    }
    catch(error)
    {
        console.log(error.message);
    res.status(500).json({ message: error.message });
    }
})

const PORT = process.env.PORT || 5000;
// app.listen(PORT,()=>{
//     console.log(`server running on http://localhost:${PORT}`)
// })

//mongoose database connection & running and listening on PORT 
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
