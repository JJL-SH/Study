var obj1 = {
  name: 'bob',
  getName: function () {
    return this.name;
  }
}
var obj2 = {
  name: 'lisa'
}

console.log(obj1.getName());
console.log(obj1.getName.call(obj2));


var obj = {
  myName: 'bob',
  getName: function () {
    return this.myName;
  }
}
console.log(obj.getName());
global.myName = 'global';
var getName2 = obj.getName;

console.log(getName2());
