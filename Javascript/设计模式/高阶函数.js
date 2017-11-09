// 回调函数
// var appendDiv = function (callback) {
//   for ( var i = 0; i < 100; i++ ) {
//     var div = document.createElement('div');
//     div.innerHTML = i;
//     document.body.appendChild(div);
//     if (typeof callback === 'function') {
//       callback(div);
//     }
//   }
// }
// appendDiv(function (node) {
//   node.style.display = 'none';
// })



var isString = function (obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
var isNumber = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}

function isType(type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  }
}
var Type = {};

for (var i = 0,type;type = ['String','Array','Number'][i++];){
  console.log(type, i);
  (function (type) {
    Type['is'+type] = function (obj) {
      return Object.prototype.toString.call(obj) === '[object '+type+']'
    }
  })(type)
}







// var getSingle = function (fn) {
//   var ret;

//   return function () {
//     return ret || (ret = fn.apply(this, arguments));
//   }
// }
// var getScript = getSingle(function () {
//   return document.createElement('script');
// })
// var script1 = getScript();
// var script2 = getScript();


Function.prototype.before = function (beforefn) {
  var __self = this;

  return function () {
    beforefn.apply(this, arguments);
    return __self.apply(this, arguments);
  }
}
Function.prototype.after = function (afterfn) {
  var __self = this;

  return function () {
    var ret = __self.apply(this. arguments);
    afterfn.apply(this, arguments);
    return ret;
  }
}
var func = function () {
  console.log(2);
}
func = func.before(function(){
  console.log(1);
}).after(function () {
  console.log(3);
})

func()

var test = function(){
  console.log('test')
}
test()








var cost = (function () {
  var args = [];

  return function () {
    if (!arguments.length) {
      var money = 0;
      var length = args.length;

      for (var i = 0; i < length; i++) {
        money += args[i];
      }
      return money;
    } else {
      Array.prototype.push.apply(args, arguments);
    }
  }
})();


cost(100,2);
cost(100);
cost(100);

console.log(cost());






Function.prototype.uncurrying = function () {
  var self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  }
}

var push = Array.prototype.push.uncurrying();
(function () {
  push(arguments, 4);
  console.log(arguments);
})(1,2,3);