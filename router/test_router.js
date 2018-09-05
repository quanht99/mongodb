const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');


const test = require('../controller/controllerTest');

router.post('/todos', test.postNewTodo);

router.get('/todos', test.readListTodo);

router.get('/todo/:_id', test.readToDo);

router.put('/todos/:_id', test.updateToDo);

router.delete('/todos/:_id', test.deleteTodo);

module.exports = router;