function createCurry() {
  var func = Array.prototype.shift.call(arguments);
  var args = Array.prototype.slice.call(arguments);
  var arity = func.length;


  return function () {
    var _args = Array.prototype.slice.call(arguments);
    Array.prototype.unshift.apply(_args, args);

    if (_args.length < arity) {
      _args.unshift(func)
      return createCurry.apply(this, _args);
    }
    
    return func.apply(this, _args);
  }
}


function _map(func, array) {
  return array.map(func);
}
var _getNewArray = createCurry(_map);
var getNewArray = _getNewArray(function (item) {
  return item * 100 + '%';
})
console.log(getNewArray([1,2,3,4]))



function check(reg, targetString) {
    return reg.test(targetString);
}
var _check = createCurry(check);
var checkPhone = _check(/^1[34578]\d{9}$/);
var checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
console.log(checkPhone('15900623513'))



function _filter(func, array) {
  return array.filter(func);
}
var _find = createCurry(_filter);
var findNumber = _find(function (item) {
  if (typeof item === 'number') {
    return true;
  }
})

console.log(findNumber([1, 2, 3, '2', '3', 4]))




function add(){
  var number = Array.prototype.slice.call(arguments);
  return number.reduce(function (pre, next) {
    return pre + next;
  })
}
var _add = createCurry(add);
console.log(_add(1,2,4))


function test(){
  var _args = Array.prototype.slice.call(arguments);

  var adder = function () {
    var _adder = function () {
      _args.push(...arguments);
      return _adder;
    }

    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a +b;
      });
    }

    return _adder;
  }
  return adder(..._args);
}


console.log(test(1,2,3)+':')


Array.prototype._map = function (fn, context) {
  var temp = [];
  if (typeof fn === 'function') {
    var k=0;
    var len=this.length;
    for(;k<len;k++) {
      console.log(this)
      temp.push(fn.call(context, this[k], k, this))
    }
  } 
  return temp
}

var newArr = [1,2,3,4]._map(function(item){
  return item + 1
})
console.log(newArr)




Array.prototype.merge = function (fn, chars) {
  return this.map(fn).join(chars);
}
var arr = [1,2,3,4];
var add = function (num) {
  return function (item) {
    return item + num;
  }
}
var red = function (num) {
  return function (item) {
    return item - num;
  }
}
var res1 = arr.merge(add(2), '-');
var res2 = arr.merge(red(1), '-');

console.log(res1)
console.log(res2)








