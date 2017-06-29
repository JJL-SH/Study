var events = require('events');
var emitter = new events.EventEmitter();

// 监听器1
var listener1 = function listener1 () {
  console.log('监听器 listener1 执行');
}

// 监听器2
var listener2 = function listener2 () {
  console.log('监听器 listener2 执行');
}

// 绑定 connection 事件，处理函数为 listener1
emitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener1
emitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(emitter, 'connection');
console.log(eventListeners + '个监听器监听连接事件');

// 处理 connection 事件
emitter.emit('connection');

// 移除绑定的 listener1 函数
emitter.removeListener('connection', listener1);
console.log('listener1不再受监听');

// 触发连接事件
emitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(emitter, 'connection');
console.log(eventListeners + '个监听器监听连接事件');

console.log('程序执行完毕');
