/*
* @Author: Bob.Liu
* @Date:   2017-10-09 10:10:20
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-09 11:26:40
*/
console.log(Reflect.has(Object, 'assign'));

var test = new Proxy({}, {
  set: function (target, name, value, reveiver) {
    var success = Reflect.set(target, name, value, reveiver);

    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }

    return success;
  }
})
test.xxx = 'iii';

var loggedObj = new Proxy({}, {
  get: function (target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty: function (target, name) {
    console.log('delete' + name);
    return Reflect.delete(target, name);
  },
  has: function (target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  }
})

// 当获取 baz 属性时调用的是 getter 则读取函数的 this 绑定 receiver 提供的对象
var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar;
  }
}
var myReceiverObject = {
  foo: 4,
  bar: 4
}
console.log(Reflect.get(myObject, 'baz', myReceiverObject));

console.log(Reflect.has(myObject, 'name'));
console.log('name' in myObject);

var queuedObservers = new Set([function(){console.log('1111111')}, function(){console.log('2222222')}]);
var observer = function (fn) {
  queuedObservers.add(fn);
}
var observable = function (obj) {
  return new Proxy(obj, {set})
}
function set(target, key, value, receiver) {
  var result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(function (observer) {
    observer();
  })
  return result;
}

var test = observable({});
test.a = 'aaaa';