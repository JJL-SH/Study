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
  }
  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('to small');
    } 
    this._wheels = value;
  }
}