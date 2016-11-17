'use strict';
exports.onSocketConnection = function(socket) {

  console.log('A user connected\n');

  socket.on('disconnect', function() {
    console.log('A user disconnected');
  });

  socket.on('login', function(username) {
    socket.broadcast.emit('login', username);
  });

  socket.on('code-response', function(code) {
    console.log(code);
    socket.broadcast.emit('lock-response', code);
  });
};
