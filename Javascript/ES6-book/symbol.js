var s = Symbol();
console.log(typeof s);

var s1 = Symbol('foo');
var s2 = Symbol('bar');

console.log(s1, s2);
console.log(s1.toString(), s2.toString());

var obj = {
  toString() {
    return 'abc';
  }
}
var sym = Symbol(obj)
console.log(sym);

var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);

var s1 = Symbol('foo');
var s2 = Symbol('foo');
console.log(s1 === s2);

var sym = Symbol('My symbol');
console.log(typeof String(sym));
console.log(typeof sym.toString());

var sym = Symbol();
console.log(Boolean(sym));
console.log(!sym);

var mySymbol = Symbol();
var a = {};
a[mySymbol] = 'Hello1!';
console.log(a[mySymbol]);
var a = {
  [mySymbol]: 'Hello2!'
}
console.log(a[mySymbol]);

var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello3!' });
console.log(a[mySymbol]);

var log = {};
log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
}
console.log(log.levels.DEBUG, log.levels.INFO);

const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

function getComplete(color) {
  switch (color) {
    case COLOR_RED:
      return 'COLOR_RED';
    case COLOR_GREEN:
      return 'COLOR_GREEN';
    default:
      throw new Error('Undefined color');

  }
}
console.log(getComplete(COLOR_RED));

var shapeType = {
  triangle: Symbol()
}

function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case shapeType.Triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}
console.log(getArea(shapeType.Triangle, { width: 100, height: 100 }));

var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);

var obj = {};
var foo = Symbol('foo');
Object.defineProperty(obj, foo, {
  value: 'foobar'
})
for (var i in obj) {
  console.log(i);
}
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

var obj = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
}
console.log(Reflect.ownKeys(obj));

var size = Symbol('size');
class Collection {
  constructor() {
    this[size] = 0;
  }
  add(item) {
    this[this[size]] = item;
    this[size]++;
  }
  static sizeOf(instance) {
    return instance[size];
  }
}
var x = new Collection();
console.log(Collection.sizeOf(x));
x.add('foo');
console.log(Collection.sizeOf(x));
console.log(Object.keys(x));
console.log(Object.getOwnPropertyNames(x));
console.log(Object.getOwnPropertySymbols(x));

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2);

console.log(Symbol.for('bar') === Symbol.for('bar'));
console.log(Symbol('bar') === Symbol('bar'));

var s1 = Symbol.for('foo');
console.log(Symbol.keyFor(s1));
var s2 = Symbol('foo');
console.log(Symbol.keyFor(s2));

const FOO_KEY = Symbol.for('foo');

function A() {
  this.foo = 'hello';
}
if (!global[FOO_KEY]) {
  global[FOO_KEY] = new A();
}

class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}
console.log([1, 2, 3] instanceof new MyClass());

class Even {
  static[Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0;
  }
}
console.log(1 instanceof Even);
console.log(2 instanceof Even);
console.log(12345 instanceof Even);

var arr1 = ['c', 'd'];
console.log(['a', 'b'].concat(arr1, 'e'));
console.log(arr1[Symbol.isConcatSpreadable]);
var arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
console.log(['a', 'b'].concat(arr2, 'e'));

var obj = { length: 2, 0: 'c', 1: 'd' };
console.log(['a', 'b'].concat(obj, 'e'));
obj[Symbol.isConcatSpreadable] = true;
console.log(['a', 'b'].concat(obj, 'e'));

class A1 extends Array {
  constructor(args) {
    super(args);
    this[Symbol.isConcatSpreadable] = true;
  }
}
class A2 extends Array {
  constructor(args) {
    super(args);
  }
  get[Symbol.isConcatSpreadable]() {
    return false;
  }
}
var a1 = new A1();
a1[0] = 3;
a1[1] = 4;
var a2 = new A2();
a2[0] = 5;
a2[1] = 6;
console.log([1, 2].concat(a1).concat(a2));

class MyArray extends Array {
  static get[Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);
console.log(mapped);
console.log(mapped instanceof MyArray);
console.log(mapped instanceof Array);

class MyMatcher {
  [Symbol.match](string) {
    return 'hello world'.indexOf(string);
  }
}
console.log('e'.match(new MyMatcher()));

var x = {};
x[Symbol.replace] = (...s) => console.log(s);
'Hello'.replace(x, 'world')

class MySearch {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}
console.log('foobar'.search(new MySearch('foo')));

class MySplitter {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    var index = string.indexOf(this.value);

    if (index === -1) {
      return string;
    }
    return [
      string.substr(0, index),
      string.substr(index + this.value.length)
    ]
  }
}
console.log('foobar'.split(new MySplitter('foo')));
console.log('foobar'.split(new MySplitter('bar')));
console.log('foobar'.split(new MySplitter('baz')));

var myIterable = {};
myIterable[Symbol.iterator] = function *() {
  yield 1;
  yield 2;
  yield 3;
}
console.log([...myIterable]);

class Collection1 extends Object {
  *[Symbol.iterator]() {
    let i = 0;

    while (this[i] !== undefined) {
      yield this[i];
      ++i;
    }
  }
}
let myCollection = new Collection1();
myCollection[0] = 1;
myCollection[1] = 2;
myCollection[2] = 3;

for (let value of myCollection) {
  console.log(value);
}

var obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
    }
  }
}
console.log(2 * obj);
console.log(3 + obj);
console.log(obj == 'default');








