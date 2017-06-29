// var events = require('events');
// var eventEmitter = new events.EventEmitter();
//
// eventEmitter.on('some_event', function() {
//   console.log('some_event 事件触发');
// });
// setTimeout(function() {
//   eventEmitter.emit('some_event');
// }, 1000)

var events = require('events');
var emitter = new events.EventEmitter();

emitter.addListener('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
});

emitter.once('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2);
})

emitter.emit('someEvent', '参数1', '参数2');
emitter.emit('someEvent', '参数11', '参数22');
