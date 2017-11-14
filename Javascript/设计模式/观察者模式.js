// var salesOffices = {};
// // 缓存列表
// salesOffices.clientList = {};
// salesOffices.listen = function (key, fn) {
//   if (!this.clientList[key]) {
//     this.clientList[key] = [];
//   }
//   this.clientList[key].push(fn);
// }
// salesOffices.trigger = function () {
//   var key = Array.prototype.shift.call(arguments);
//   var fns = this.clientList[key];

//   if (!fns || !fns.length) {
//     return false;
//   }
//   for (var i = 0,fn; fn = fns[i++];) {
//     fn.apply(this, arguments);
//   }
// }

// salesOffices.listen('squareMeter80', function (price) {
//   console.log('Lisa');
//   console.log('价格：' + price);
// })
// salesOffices.listen('squareMeter100', function (price) {
//   console.log('Bob');
//   console.log('价格：' + price);
// })
// salesOffices.trigger('squareMeter80', 10000)
// salesOffices.trigger('squareMeter100', 20000)


var event = {
  clientList: [],
  listen: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);
  },
  remove: function(key, fn) {
    var fns = this.clientList[key];

    if (!fns || !fns.length) {
      return false;
    }
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (var l = 0,length = fns.length;l < length;l++) {
        (fn === fns[l]) && fns.splice(l-1, 1)
      }
    }
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = this.clientList[key];

    if (!fns || !fns.length) {
      return false;
    }
    for (var i = 0,fn; fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  }
}
var installEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
}


// var salesOffices = {};
// installEvent(salesOffices);
// salesOffices.listen('squareMeter80', fn1 = function (price) {
//   console.log('Lisa');
//   console.log('价格：' + price);
// })
// salesOffices.listen('squareMeter100', fn2 = function (price) {
//   console.log('Bob');
//   console.log('价格：' + price);
// })
// salesOffices.remove('squareMeter100')
// salesOffices.trigger('squareMeter80', 10000)
// salesOffices.trigger('squareMeter100', 20000)
var login = {};
installEvent(login);

var header = (function () {
  login.listen('loginSucc', function (data) {
    header.setAvatar(data.avatar);
  });
  return {
    setAvatar: function (data) {
      console.log('设置在header中的头像', data);
    }
  }
})();
var nav = (function () {
  login.listen('loginSucc', function (data) {
    nav.setAvatar(data.avatar);
  })
  return {
    setAvatar: function (data) {
      console.log('设置在nav中的头像', data);
    }
  }
})();
var address = (function () {
  login.listen('loginSucc', function (data) {
    address.refresh(data.avatar);
  })
  return {
    refresh: function (data) {
      console.log('刷新了地址');
    }
  }
})();

login.trigger('loginSucc', {avatar: 'xxxxx'})