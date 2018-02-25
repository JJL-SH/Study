var mult = function () {
  var a = 1;
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i]
  }
  return a;
}

// 作缓存计算过的就不再重新计算
var cache = {};
var mult2 = function () {
  var args = Array.prototype.join.call(arguments, ',');

  if (cache[args]) {
    return cache[args];
  }

  var a = 1;
  for (var i=0,l=arguments.length;i<l;i++) {
    a = a * arguments[i]
  }

  return cache[args] = a;
}


console.log(mult(1,2,3,4,5,6))



var mult3 = (function () {
  var cache3 = {};

  return function() {
    var args = Array.prototype.join.call(arguments, ',');

    if (cache[args]) {
      return cache3[args];
    }

    var a = 1;
    for (var i=0,l=arguments.length;i<l;i++) {
      a = a * arguments[i];
    }

    return cache3[args] = a;
  }
})()

console.log(mult3(1,2,3,4,5,6))

var mult4 = (function(){
  var cache4 = {};
  var calculate = function() {
    var a = 1;
    for(var i=0,l=arguments.length;i<l;i++){
      a=a*arguments[i];
    }
    return a;
  }

  return function () {
    var args = Array.prototype.join.call(arguments, ',');
    if (args in cache4) {
      return cache4[args];
    }
    console.log(cache4)
    return cache4[args] = calculate.apply(null, arguments);
  }
})()

console.log(mult4(1,2,3,4,5,6))
console.log(mult4(1,2,3,4,5,6,7))