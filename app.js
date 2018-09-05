const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');

const test = require('./router/test_router');
const student = require('./router/test_router_student');

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/api/', test);
app.use('/api/', student)

module.exports = app;