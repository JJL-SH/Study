var mult = function () {
  console.log('开始计算乘积');
  var a = 1;
  for (var i = 1, l = arguments.length; i < l; i++) {
    a = a * arguments[i];
  }
  return a;
}
var plus = function () {
  console.log('开始计算加和');
  var a = 1;
  for (var i = 1, l = arguments.length; i < l; i++) {
    a = a + arguments[i];
  }
  return a;
}

var createProxyFactory = function(fn){
  var cache = {};
  
  return function () {
    var args = Array.prototype.join.call(arguments, '_');

    if (cache[args]) {
      return cache[args];
    }

    return cache[args] = fn.apply(this, arguments);
  }
};

var proxyMult = createProxyFactory(mult);
var proxyPlus = createProxyFactory(plus);

console.log(proxyMult(1,2,3,4));
console.log(proxyMult(1,2,3,4));
console.log(proxyPlus(1,2,3,4));
console.log(proxyPlus(1,2,3,4));

