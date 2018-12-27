const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

// get todos
router.get("/", (req, res) => {
    Todo.find((err, todos) => {
        if(err) return res.status(500).json(err);
        res.status().json({
            count: todos.length,
            todos: todos
        });
    });
});

module.exports = router;