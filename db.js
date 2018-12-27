const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos", { useNewUrlParser: true, useCreateIndex: true });