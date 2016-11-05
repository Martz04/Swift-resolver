'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile('index.html');
});

io.on('connection', function(socket) {
  console.log('A user connected\n');
});
http.listen(3000, ()=> console.log('Listening on port 3000\n'));
