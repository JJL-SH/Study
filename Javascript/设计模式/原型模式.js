var Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
}
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

var clonePlane = Object.create(plane);
console.log(clonePlane.blood);
console.log(clonePlane.attackLevel);
console.log(clonePlane.defenseLevel);


var obj1 = new Object();
var obj2 = {};

console.log(Object.getPrototypeOf(obj1) === Object.prototype);
console.log(Object.getPrototypeOf(obj2) === Object.prototype);



function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
}
var objectFactory = function () {
  // 新建一个对象
  var obj = new Object();
  // 拆分参数
  var Constructor = [].shift.call(arguments);
  // 原型挂钩
  obj.__proto__ = Constructor.prototype;
  Constructor.apply(obj, arguments);

  return obj;
}

var a = objectFactory(Person, 'sven');
console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);



var obj = {name: 'sven'};
var A = function(){}
A.prototype = obj;

var a = new A();
console.log(a.name);