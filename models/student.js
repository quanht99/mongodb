const mongoose = require('mongoose');
const todo = require('./todo');

const studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    TKB: [todo.todoSchema],
})

const student = mongoose.model('student', studentSchema);

module.exports = student;