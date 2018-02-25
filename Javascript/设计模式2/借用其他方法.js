var A = function (name) {
  this.name = name;
}
var B = function () {
  A.apply(this, arguments);
}

B.prototype.getName = function () {
  return this.name;
}
var b = new B('bob');

console.log(b.getName());