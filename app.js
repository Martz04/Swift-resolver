'use strict';
var express = require('express'),
 app = express(),
 server = app.listen(3000, '0.0.0.0', function() {
     console.log('Listening to port:  ' + 3000);
 }),
 io = require('socket.io').listen(server),
 socketController = require('./controller/socketController'),
 path = require('path'),
 publicDir = path.join(__dirname, 'public');

app.use('/user', express.static('public'));
app.use('/dashboard', express.static('public'));

app.get('/user', function(request, response) {
  response.sendFile(path.join(publicDir, 'user.html'));
});

app.get('/dashboard', function(request, response) {
  response.sendFile(path.join(publicDir, 'dashboard.html'));
});

io.on('connection', socketController.onSocketConnection);
