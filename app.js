const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const todoRoutes = require("./routes/todo");
app.use("/api/todos", todoRoutes);

module.exports = app;