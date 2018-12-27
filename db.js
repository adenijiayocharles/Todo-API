const mongoose = require("mongoose");
mongoose.set('debug', true);
// mongoose.connect("mongodb://localhost/todo-api", { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect("mongodb+srv://charles:todo@todo-li9rc.mongodb.net/test?retryWrites=true", { useNewUrlParser: true, useCreateIndex: true });