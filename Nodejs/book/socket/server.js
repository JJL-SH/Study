var express = require('express');
var router = express.Router();
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connect', function(socket) {
  console.log('a user connected');

  socket.on('disconnect', function() {
    console.log('a user go out');
  })
  socket.on('message', function(obj) {
    console.log('the websocket message is ' + obj);
    io.emit('message', obj);
  })
})
server.listen(3000);

router.get('/imRoom', function(req, res, next) {
  res.render('im/imRoom')
})

module.exports = router;