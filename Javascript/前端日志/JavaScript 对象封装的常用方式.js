/*
* @Author: Bob.Liu
* @Date:   2017-10-09 19:16:35
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-09 19:28:02
*/
function Person(info) {
  this._init_(info);
}
Person.prototype = {
  constructor: Person,
  _init_: function (info) {
    this.name = info.name;
    this.age = info.age;
    this.sex = info.sex;
  },
  sayHello: function () {
    console.log('hello');
  }
}




var Person = function (info) {
  return new Person.prototype.init(info);
}

Person.prototype = {
  constructor: Person,
  init: function () {
    this.name = info.name;
  }
}
Person.prototype.init.prototype = Person.prototype;