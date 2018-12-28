const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === "OPTIONS"){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

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