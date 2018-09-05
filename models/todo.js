const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    Thu: String,
    Gio: String,
    MonHoc: String,
    TrangThai: Boolean,
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo, 
    todoSchema
}