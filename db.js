const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/todo-api", { useNewUrlParser: true, useCreateIndex: true });

mongoose.Promise = Promise;