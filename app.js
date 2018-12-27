const express = require("express");
const app = express();
const db = require("./db");


const todoRoutes = require("./routes/todo");
app.use("/api/todos", todoRoutes);

module.exports = app;