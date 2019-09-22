const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect("mongodb://todo:charles1@ds145184.mlab.com:45184/todosapi", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });