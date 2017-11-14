var Event = (function () {
  var clientList = {};
  var listen;
  var trigger;
  var remove;

  listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  }
  trigger = function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = clientList[key];

    if (!fns || !fns.length) {
      return false;
    }
    for (var i = 0,fn; fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  }
  remove = function (key, fn) {
    var fns = clientList[key];
    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (var i = 0, l = fns.length; i < l; i++) {
        (fn === fns[i]) && fns.splice(i - 1, 1);
      }
    }
  }
  return {
    listen: listen,
    remove: remove,
    trigger: trigger
  }
})();

Event.listen('squareMeter88', function (price) {
  console.log(price);
})
Event.trigger('squareMeter88', 10000)