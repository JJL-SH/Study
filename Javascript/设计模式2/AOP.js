// Function.prototype.before = function (beforefn) {
//   var __self = this;

//   return function(){
//     beforefn.apply(this, arguments);
//     return __self.apply(this, arguments);
//   }
// }
// Function.prototype.after = function(afterfn) {
//   var __self = this;
//   return function(){
//     var ret = __self.apply(this, arguments);
//     afterfn.apply(this, arguments);
//     return ret;
//   }
// }

// var func = function(){
//   console.log(2)
// }

// func = func.before(function(){
//   console.log(1)
// }).after(function(){
//   console.log(3)
// })

// func();




Function.prototype.uncurrying = function(){
  var self = this;

  return function(){
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments)
  }
}

var push = Array.prototype.push.uncurrying();

(function(){
  push(arguments, 4);
  console.log(arguments);
})(1,2,3)