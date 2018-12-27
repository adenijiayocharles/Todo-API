const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");


// get todos - index route
router.get("/", (req, res) => {
    Todo.find((err, todos) => {
        if(err) return res.status(500).json(err);

        res.status(200).json({
            count: todos.length,
            todos: todos
        });
    });
});

//create todo
router.post("/", (req, res) => {
    Todo.create(req.body, (err, todo) => {
        if(err) return res.status(500).json(err);
        res.status(201).json({
            status: "success",
            todo: todo            
        });
    })
});

//get single todo
router.get("/:todoId", (req, res) => {
    Todo.findById(req.params.todoId, (err, todo) => {
        if(err) return res.status(500).json(err);
        if(todo.length === 0){
            return res.status(404).json("Todo not found");
        }
        res.status(200).json({
            status: "success",
            todo: todo
        });
    })
});

//update todo
router.put("/:todoId", (req, res) => {
    Todo.findByIdAndUpdate(req.params.todoId, req.body,{ new: true }, (err, todo) => {
        if(err) return res.status(500).json(err);
        res.status(200).json({
            status: "success",
            todo: todo            
        });
    });
});

//delete todo
router.delete("/:todoId", (req, res) => {
    Todo.remove({_id: req.params.todoId}, (err, todo) => {
        if(err) return res.status(500).json(err);
        res.status(200).json({
            status: "success",
            message: `Todo deleted`    
        });        
    });
})

module.exports = router;