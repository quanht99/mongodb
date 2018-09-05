const mongoose = require('mongoose');


const student = require('../models/student');


function createStudent(req, res) {
    const { name, age, Thu, Gio, MonHoc, TrangThai } = req.body;
    try {
        student.create({
            name: name,
            age: age,
            TKB: [
                {
                    Thu: Thu,
                    Gio: Gio,
                    MonHoc: MonHoc,
                    TrangThai: TrangThai
                }
            ]
        })
            .then(function (result) {
                res.json({
                    success: true,
                    data: null
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

function ThemMon(req, res) {
    const { Thu, Gio, MonHoc, TrangThai } = req.body;
    const { _id } = req.params;
    try {
        student.findOne({
            _id: _id
        })
            .then(function (result) {
                const in4 = {
                    "Thu": Thu,
                    "Gio": Gio,
                    "MonHoc": MonHoc,
                    "TrangThai": TrangThai
                }
                result.TKB.push(in4);
                result.save().then(function () {
                    res.json({
                        success: true
                    })
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


function getStudent(req, res) {
    const { _id } = req.params;
    try {
        student.findOne({
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

function getListStudent(req, res){
    try{
        student.find()
            .then(function(result){
                res.json({
                    success: true,
                    data: result
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
    createStudent,
    ThemMon,
    getStudent,
    getListStudent
};