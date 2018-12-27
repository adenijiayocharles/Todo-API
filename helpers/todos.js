const Todo = require("../models/todo");
exports.getTodos = function(req, res){
    Todo.find((err, todos) => {
        if(err) return res.status(500).json(err);

        res.status(200).json({
            count: todos.length,
            todos: todos
        });
    });
}

exports.createTodo = function(req, res){
    Todo.create(req.body, (err, todo) => {
        if(err) return res.status(500).json(err);
        res.status(201).json({
            status: "success",
            todo: todo            
        });
    });    
}

exports.getTodo = function(req, res){
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
}

exports.updateTodo = function(req, res){
    Todo.findByIdAndUpdate(req.params.todoId, req.body,{ new: true }, (err, todo) => {
        if(err) return res.status(500).json(err);
        res.status(200).json({
            status: "success",
            todo: todo            
        });
    });   
}

exports.deleteTodo = function(req, res){
    Todo.remove({_id: req.params.todoId}, (err, todo) => {
        if(err) return res.status(500).json(err);
        res.status(200).json({
            status: "success",
            message: `Todo deleted`    
        });        
    });    
}
module.exports = exports;