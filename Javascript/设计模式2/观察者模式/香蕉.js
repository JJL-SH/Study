var createEventSys = function () {
  return {
    // 通过 on 接口监听事件 event name
    // 如果时间 eventName 被触发，则执行 callback 回调函数
    on: function (eventName, callback) {
      // 如果 Event 对象没有 handles 属性，则给 Event 对象定义属性 handles，初始值为 {}
      // handles 属性是用来储存事件的回调执行函数的（即储存订阅的事件和触发事件后执行的相应函数方法）
      if (!this.handles) {
        this.handles = {};
      }
      // 如果 handles 中不存在事件 eventName，则将事件储存在 handles 中，同时初始化该事件对应的回调逻辑函数集合
      if (!this.handles[eventName]) {
        this.handles[eventName] = [];
      }
      // 往 handles 中的 eventName 对应的回调逻辑函数集合 push 回调函数 callback
      this.handles[eventName].push(callback);
    },
    emit: function (eventName) {
      if (this.handles[eventName]) {
        for (var i = 0; i < this.handles[eventName].length; i++) {
          this.handles[eventName][i](arguments[1]);
        }
      }
    },
    remove: function (eventName, fn) {
      if (this.handles[eventName]) {
        for (var i = 0; i < this.handles[eventName].length; i++) {
          if (this.handles[eventName][i] === fn) {
            this.handles[eventName].splice(i, 1);
            break;
          }
        }
      }
    }
  }
}



var Event = createEventSys();
Event.on('test', function (result) {
  console.log(result)
})
Event.on('test', function () {
  console.log('test')
})
Event.emit('test', '..........')







