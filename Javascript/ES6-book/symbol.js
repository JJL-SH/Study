let s = Symbol();

console.log(typeof s);

var s1 = Symbol('foo');
var s2 = Symbol('bar');

console.log(s1);
console.log(s2);
console.log(s1.toString());
console.log(s2.toString());

var obj = {
  toString() {
    return 'abc';
  }
}

const sym = Symbol(obj);
console.log(sym);

var mySymbol = Symbol();
var a = {};
a[mySymbol] = 'Hello!';
console.log(a[mySymbol])
var a = {
  [mySymbol]: 'Hello!'
}
console.log(a[mySymbol])

var log = {};
log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
}
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');

const COLOR_RED = Symbol('red');
const COLOR_GREEN = Symbol('green');

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;

    case COLOR_GREEN:
      return COLOR_RED;

    default:
      throw new Error('Undefined color');
  }
}

console.log(getComplement(COLOR_RED))
var shapeType ={
  triangle: Symbol()
}

function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width + options.height;
      break;
  }

  return area;
}

console.log(getArea(shapeType.triangle, {width:100, height:100}))


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


let obj1 = {
  [Symbol('my_key')]: 1,
  enm: 2,
  nonEnum: 3
}

console.log(Reflect.ownKeys(obj1));


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
console.log(Symbol.keyFor(s1));
var s2 = Symbol('foo');
console.log(Symbol.keyFor(s2));

class Even {
  static [Symbol.hasInstance](obj) {
    return Number(obj) % 2 === 0;
  }
}
console.log(1 instanceof Even);
console.log(2 instanceof Even);
console.log(12345 instanceof Even);

let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e');
console.log(arr1[Symbol.isConcatSpreadable]);
let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
console.log(['a', 'c'].concat(arr2, 'e'));


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
  get [Symbol.isConcatSpreadable] () {
    return false;
  }
}
let a1 = new A1();
let a2 = new A2();
a1[0] = 3;
a1[1] = 4;
a2[0] = 5;
a2[1] = 6;
console.log([1,2].concat(a1).concat(a2));























