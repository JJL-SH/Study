var foo = 'bar';
var baz = {foo};

console.log(baz);

function f(x, y) {
  return {x, y};
}
console.log(f(1,2));

var o = {
  method() {
    return 'Hello!';
  }
}

var birth = '2000/01/01';
var Person = {
  name: '张三',
  birth,
  hello() {
    console.log(this.name)
  }
}

Person.hello()

var ms = {};
function getItem(key) {
  return key in ms ? ms[key] : null;
}
function setItem(key, value) {
  ms[key] = value;
}
function clear() {
  ms = {};
}
module.exports = {getItem, setItem, clear};

var cart = {
  _wheels: 4,
  get wheels () {
    return this._wheels;
  },
  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('to small');
    } 
    this._wheels = value;
  }
}

var a = {a:1};
var b = {a:1};
console.log(Object.is(a, b))


function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin);
}


const merge = (target, ...soureces) => {
  return Object.assign(target, ...soureces);
}

let obj = {foo: 123};
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

var obj = Object.create(someOtherObj);
obj.method = function () {}


let proto = {};
let obj = {x:10};
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 40;

