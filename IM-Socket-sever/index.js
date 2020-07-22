var express = require('express');
var app = express();

var sever = app.listen(8082);
var io = require('socket.io').listen(sever);

// 引入socket.js
require('./model/socket.js')(io)

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});