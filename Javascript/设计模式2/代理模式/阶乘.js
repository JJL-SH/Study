var mult = function () {
  console.log('start')
  var a = 1;
  for (var i = 0,l=arguments.length;i<l;i++) {
    a = a * arguments[i];
  }
  return a
}
var proxyMult = (function () {
  var cache = {};

  return function () {
    var str = [].join.call(arguments, '');
    if (cache[str]) {
      return cache[str];
    }
    return cache[str] = mult.apply(null, arguments)
  }
})()

console.log(proxyMult(1,2,3,4,5))
console.log(proxyMult(1,2,3,4,5))
console.log(proxyMult(1,2,3,4,5))
console.log(proxyMult(1,2,3,4,5))
console.log(proxyMult(1,2,3,4,5))
