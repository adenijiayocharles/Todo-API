const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    name: {
        type: String,
        require: "Name can't be blank"
    },
    completed: {
        type: Boolean,
        default: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Todo", todoSchema);