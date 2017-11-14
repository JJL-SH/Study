var Event = (function () {
  var global = this;
  var Event;
  // 默认命令空间
  var _default = 'default';

  Event = function () {
    var _listen,
        _trigger,
        _remove,
        _create,
        _slice = Array.prototype.slice,
        _shift = Array.prototype.shift,
        _unshift = Array.prototype.unshift,
        namespaceCache = {},
        find,
        each = function (ary, fn) {
          var ret;

          for (var i = 0; l = ary.length; i < l; i++) {
            ret = fn.call(ary[i], i, ary[i]);
          }

          return ret;
        };
    _listen = function (key, fn, cache) {
      if (!cache[key]) {
        cache[key] = [];
      }
      cache[key].push(fn);
    }
    _remove = function (key, fn, cache) {
      // 如果在缓存中有，如果有fn则删除指定订阅，没有则删除所有的订阅
      if (cache[key]) {
        if (fn) {
          for (var i = cache[key].length; i >= 0; i--) {
            if (cache[key][i] === fn) {
              cache[key].splice(i, 1);
            }
          }
        } else {
          cache[key] = [];
        }
      }
    }
    _trigger = function () {
      var cache = _shift.call(arguments),
          key = _shift.call(arguments),
          args = arguments,
          _self = this,
          stack = cache[key],
          ret;

      if (!stack || !stack.length) {
        return;
      }
      
      return each(stack, function () {
        return this.apply(_self, args);
      })
    }
    _create = function (namespace) {
      var namespace = namespace || _default;
      var cache = {},
          offlineStack = [],
          ret = {
            listen: function (key, fn, last) {
              _listen(key, fn, cache);
              if (offlineStack === null) {
                return;
              }
              if (last === 'last') {
                offlineStack.length && offlineStack.pop()();
              } else {
                each(offlineStack, function () {
                  this();
                })
              }
              offlineStack = null;
            },
            one: function (key, fn, last) {
              _remove(key, cache);
              this.listen(key, fn, last)
            },
            remove: function (key, fn) {
              _remove(key, cache, fn);
            },
            trigger: function () {
              var fn,
                  args,
                  _self = this;
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
      // 如果有设置命名空间，那么查看当前有没有，如果有则使用有的命名空间，如果没有则新建一个
      // 没有设置命名空间的话，使用默认的
      return namespace ? 
        (
          namespaceCache[namespace] ? 
            namespaceCache[namespace] : 
            (namespaceCache[namespace] = ret)
        ) : 
        ret;
    }
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
  }();
  return Event;
})();