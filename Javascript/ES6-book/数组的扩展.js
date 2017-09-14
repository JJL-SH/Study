console.log(...[1,2,3]);
console.log(1,...[2,3,4],5);

function push(array, ...items) {
  array.push(...items);
}

function add(x,y) {
  return x + y;
}
var numbers = [4,16];
console.log(add(...numbers));

let map = new Map([
  [1,'one'],
  [2,'two'],
  [3,'three']
])

console.log([...map.values()]);

var go = function *() {
  yield 1;
  yield 2;
  yield 3;
}

console.log(...go())

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}

console.log(Array.from(arrayLike));

console.log([1,2,3,4,5,6].copyWithin(0, 3));