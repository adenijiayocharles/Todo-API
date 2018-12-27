const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


const todoRoutes = require("./routes/todo");
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.sendFile("index.html");
})

module.exports = app;