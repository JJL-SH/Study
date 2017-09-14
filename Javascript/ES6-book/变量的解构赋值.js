let [a, b, c] = [1, 2, 3];
console.log(a,b,c);

function* fibs() {
  let a = 0;
  while (true) {
    yield a;
    [a] = [++a];
  }
}
let [first, second, third, fourth, fifth, sixth] = fibs();

console.log(first, second, third, fourth, fifth, sixth);

let [foo = true] = [];
console.log(foo);

// let [x, y = 'b'] = ['a'];
// console.log(x, y);
// let [x, y = 'b'] = ['a', undefined]
// console.log(x, y);

function f() {
  console.log('xxxx');
}

// let [x = f()] = [undefined];

var {foo: baz} = {foo:'aaa',bar:'bbb'};
console.log(baz);

let obj = {
  p: [
    'Hello',
    {
      y: 'World'
    }
  ]
}
// let {p:[x,{y}]} = obj;
// console.log(x,y);

var node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
}
var {loc, loc:{start},loc:{start:{line}}} = node;

console.log(line, loc, start);

let {toString: s} = true;
console.log(s === Boolean.prototype.toString);

function add ([x, y]) {
  console.log(x + y);
}
add([1,2])

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for ( let [key, value] of map) {
  console.log(`${key} is ${value}`);
}