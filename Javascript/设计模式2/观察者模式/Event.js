var Event = (function () {
  var global = this;
  var Event;
  var _default = 'default';

  Event = function () {
    var _listen;
    var _trigger;
    var _remove;
    var _slice = Array.prototype.slice;
    var _shift = Array.prototype.shift;
    var _unshift = Array.prototype.unshift;
    var namespaceCache = {};
    var _create;
    var find;
    // 自定义迭代器模式
    var each = function (ary, fn) {
      var ret;
      for (var i = 0;i < ary.length;i++) {
        var n = ary[i];
        ret = fn.call(n, i ,n);
      }
    }

    _listen = function (key, fn, cache) {
      if (!cache[key]) {
        cache[key] = [];
      }
      cache[key].push(fn);
    }
    _trigger = function () {
      var _self = this;
      var cache = _shift.call(arugments);
      var key = _shift.call(arugments);
      var arg = arguments;
      var ret;
      var stack = cache[key];

      if (!stack || !stack.length) {
        return;
      }
      return each(stack, function () {
        return this.apply(_self, args);
      })
    }
    _create = function (namespace) {
      // 如果有传入命名空间名称则使用，否则使用默认的命名空间名称
      var namespace = namespace || _default;
      // 
      var cache = {};
      // 先触发后订阅时缓存接收的消息
      var offlineStack = [];
      var ret = {
        listen: function (key, fn, last) {
          _listen(key, fn, cache);
          if (offlineStack === null) {
            return;
          }
          if (last === 'last') {
            offlineStack.length && offlineStack.pop()
          } else {
            each(offlineStack, function () {
              this();
            })
          }
          offlineStack = null;
        },
        one: function (key, fn ,last) {
          _remove(key, fn, last);
          this.listen(key, fn, last);
        },
        remove: function (key, fn) {
          _remove(key, cache, fn);
        },
        trigger: function () {
          var fn;
          var args;
          var _self = this;

          _unshift.call(arguments, cache);
          args = arguments;
          fn = function () {
            return _trigger.apply(_self, args);
          }
          if (offlineStack) {
            return offlineStack.push(fn);
          }
          return fn();
        }
      }

      return namespace ? (namespaceCache[namespace] ? namespaceCache[namespace] : namespaceCache[namespace] = ret) : ret;
    }
    // 向外暴露方法
    return {
      create: _create,
      one: function (key, fn, last) {
        var event = this.create();
        event.one(key, fn, last);
      },
      remove: function (key, fn) {
        var event = this.create();
        event.remove(key, fn);
      },
      listen: function (key, fn, last) {
        var event = this.create();
        event.listen(key, fn, last);
      },
      trigger: function () {
        var event = this.create();
        event.trigger.apply(this, arguments);
      }
    }
  }()
  return Event;
})()