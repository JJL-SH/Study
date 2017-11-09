var mult = function () {
  var a = 1;

  for (var i = 0,l = arguments.length;i<l;i++) {
    a = a * arguments[i];
  }

  return a;
}

console.log(mult(1,2,3));


var cache = {};
var mult = function () {
  var args = [].prototype.join.call(arguments, ',');

  if (cache[args]) {
    return cache[args];
  }
  var a = 1;
  for (var i = 0,l=arguments.length;i<l;i++) {
    a = a * arguments[i];
  }
  return cache[args] = a;
}



var mult = function () {
  var cache = {};
  var calculatr = function () {
    var a = 1;
    for (var i = 0,l=arguments.length;i<l;i++) {
      a = a * arguments[i];
    }
    return a;
  }

  return function () {
    var args = [].prototype.join.call(arguments, ',');

    if (cache[args]) {
      return cache[args];
    }
    
    return cache[args] = calculatr.apply(null, arguments);
  }
}()


var extent = function () {
  var value = 0;
  return {
    call: function () {
      value++;
      console.log(value);
    }
  }
}
var extent = extent();
console.log(extent.call());
console.log(extent.call());
console.log(extent.call());