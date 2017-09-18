const s = new Set();
[2,3,5,4,5,2,2].forEach((x) => {
  return s.add(x);
})

for (let i of s) {
  console.log(i);
}

var set = new Set([1,2,3,4,4]);
console.log(...set)

var items = new Set([1,2,3,4,5,5,5,5,5]);
console.log(items.size)

const properties = {
  width:1,
  height:1
}

// if (properties[someName]) {
//   // do something
// }


console.log([...new Set([1,2,3,1,2,3,3,2,1])])

var set = new Set(['red', 'green', 'blue']);

for ( var item of set) {
  console.log(item);
}


var set = new Set([1,2,3]);
set.forEach((v, k) => {
  console.log(v * 2);
})

var a = new Set([1,2,3]);
var b = new Set([2,3,4]);

console.log(new Set([...a, ...b]));
console.log(new Set([...a].filter(x => b.has(x))));
console.log(new Set([...a].filter(x => !b.has(x))));

var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(global);
ws.add(obj);

console.log(ws.has(global));
console.log(ws.has(foo));

ws.delete(global);
console.log(ws.has(global));

var foos = new WeakSet();
class Foo {
  constructor() {
    foos.add(this);
  }
  method() {
    if (!foos.has(this)) {
      // ....
    }
  }
}


var m = new Map();
var o = {p:'Hello World'};

m.set(o, 'content');
console.log(m.get(o));
console.log(m.has(o));
console.log(m.delete(o));
console.log(m.has(o));


var items = [
  ['name', '张三'],
  ['title', 'Author']
]

var map = new Map();

items.forEach((k, v) => {
  map.set(k, v);
})

var set = new Set([
  ['foo', 1],
  ['bar', 2]
]);

var m1 = new Map(set);
console.log(m1.get('foo'));

var m2 = new Map([['baz', 3]]);
var m3 = new Map(m2);
console.log(m3.get('baz'));

var reporter= {
  report: function (k, v) {
    console.log('Key: %s, Value: $s', k, v);
  }
}

var wm = new WeakMap();
var key = {};
var obj = {foo: 1};

wm.set(key, obj);
obj = null;
console.log(wm.get(key));








