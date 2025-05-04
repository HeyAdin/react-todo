const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_SECRET);

const todoSchema =new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todos = mongoose.model('todos',todoSchema);
module.exports = {
    todos
}