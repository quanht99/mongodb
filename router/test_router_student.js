const express = require('express');
const router = express.Router();

const student = require('../controller/controllerStudent');

router.post('/students', student.createStudent);

router.put('/students/:_id', student.ThemMon);

router.get('/student/:_id', student.getStudent);

router.get('/students', student.getListStudent);

module.exports = router;