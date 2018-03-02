var event = {
  clientList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }

    this.clientList[key].push(fn)
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = this.clientList[key];

    if (!fns || !fns.length) {
      return false;
    }

    for (var i = 0,fn;fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  },
  remove: function(key, fn){
    var fns = this.clientList[key];

    if (!fns) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var i =0,_fn;_fn=fns[i++];) {
        if (_fn === fn) {
          fns.splice(i, 1);
        }
      }
    }
  }
}

var installEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
}
var salesOffices = {};
installEvent(salesOffices);

salesOffices.listen('squareMeter88', fn1 = function (price) {
  console.log('A'+price);
})
salesOffices.listen('squareMeter88', fn2 = function (price) {
  console.log('B'+price);
})

salesOffices.remove('squareMeter88', fn1);
salesOffices.trigger('squareMeter88', 222);
