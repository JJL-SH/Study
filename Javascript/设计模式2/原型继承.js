function Person(name) {
  this.name = name;
}
Person.prototype.getName = function(){
  return this.name;
}

var objectFactory = function () {
  var obj = new Object();
  var Constructor = [].shift.call(arguments);
  // 对象设置原型使用 __proto__ 方法
  obj.__proto__ = Constructor.prototype;
  // 立即执行
  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj;
}

var a = objectFactory(Person, 'sven');

console.log(a.name)
console.log(a.getName)
console.log(Object.getPrototypeOf(a) === Person.prototype)