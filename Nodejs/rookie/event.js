var EventEmitter = require('events').EventEmitter;
var eventEmitter = new EventEmitter();

// function handleConnect() {
//   console.log('链接成功');
//   eventEmitter.emit('data_received');
// }

// eventEmitter.on('data_received', function(){
//   console.log('数据接收成功');
// })
// eventEmitter.on('connection', handleConnect)

// eventEmitter.emit('connection')
// console.log('over');

eventEmitter.on('someEvent', function (arg1, arg2) {
  console.log('someEvent', arg1, arg2);
})
eventEmitter.once('someEvent', function (arg1, arg2) {
  console.log('someEvent', arg1, arg2);
})
eventEmitter.emit('someEvent', 1, 2)
eventEmitter.emit('someEvent', 1, 2)
