const express = require("express");
const router = express.Router();
const helpers = require("../helpers/todos");

router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route("/:todoId")
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)    
    .get(helpers.getTodo)   

module.exports = router;