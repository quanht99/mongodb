

const todo = require('../models/todo');

function postNewTodo(req, res) {
    const { Thu, Gio, MonHoc, TrangThai } = req.body;
    try {
        todo.todo.create({
            Thu: Thu,
            Gio: Gio,
            MonHoc: MonHoc,
            TrangThai: TrangThai
        })
            .then(function (result) {
                res.json({
                    success: true,
                    data: result
                })
            })
            .catch(function (err) {
                res.json({
                    success: false,
                    data: null,
                    reason: err.message
                })
            })
    }
    catch (err) {
        res.json({
            success: false,
            data: null,
            reason: err.message
        })
    }
}

function readListTodo(req, res) {
    try {
        todo.todo.find()
            .then(function (result) {
                res.json({
                    success: true,
                    data: result
                })
            })
            .catch(function (err) {
                res.json({
                    success: false,
                    data: null,
                    reason: err.message
                })
            })
    }
    catch (err) {
        res.json({
            success: false,
            data: null,
            reason: err.message
        })
    }
}

function readToDo(req, res) {
    const { _id } = req.params;
    try {
        todo.todo.find({
            _id: _id
        })
            .then(function (result) {
                res.json({
                    success: true,
                    data: result
                })
            })
            .catch(function (err) {
                res.json({
                    success: true,
                    data: null,
                    reason: err.message
                })
            })
    }
    catch (err) {
        res.json({
            success: true,
            data: null,
            reason: err.message
        })
    }
}

function updateToDo(req, res) {
    const { Thu, Gio, MonHoc, TrangThai } = req.body;
    const { _id } = req.params;

    try {
        todo.todo.findOneAndUpdate({
           _id: _id
        }, {
            Thu: Thu,
            Gio: Gio,
            MonHoc: MonHoc,
            TrangThai: TrangThai
            })
            .then(function (result) {
                res.json({
                    success: true,
                    data: null,
                    message: "Update Thành Công!"
                })
            })
            .catch(function (err) {
                res.json({
                    success: false,
                    data: null,
                    reason: err.message
                })
            })
    }
    catch (err) {
        res.json({
            success: false,
            data: null,
            reason: err.message
        })
    }
}

function deleteTodo(req, res){
    const {_id} = req.params;
    try{
        todo.todo.findOneAndDelete({
            _id: _id
        })
        .then(function(result){
            console.log(result);
            res.json({
                success: true,
                data: null,
                message: "Delete Thành Công!"
            })
        })
        .catch(function(err){
            res.json({
                success: false,
                data: null,
                reason: err.message
            })
        })
    }
    catch(err){
        res.json({
            success: false,
            data: null,
            reason: err.message
        })
    }
}
module.exports = {
    postNewTodo,
    readListTodo,
    readToDo,
    updateToDo,
    deleteTodo
}