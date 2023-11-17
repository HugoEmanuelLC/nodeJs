const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}));

const route = require(__dirname+'/routes/route');

app.use('/', route);

module.exports = app;