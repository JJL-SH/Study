var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// 客户端 io 连接调用
io.on('connection', function(socket){
  console.log('a user connected');
  
  // 用户断开连接触发
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
  // 接收用户推送消息
  socket.on('chat message', function(msg){
    console.log('message:'+msg);
    // 给用户推送消息
    io.emit('chat message', msg);
  })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
})