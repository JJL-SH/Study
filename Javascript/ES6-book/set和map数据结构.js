var s = new Set();
[2,3,4,5,3,1,2,3,4].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);
}

var set = new Set([1,2,3,1,2,3,4,2]);
console.log([...set]);
var items = new Set([2,3,4,1,12,3,43,4,5]);
console.log(items.size);

var s= new Set();
s.add(1).add(2).add(2);
console.log(s.size);
console.log(s.has(1));
console.log(s.has(2));
console.log(s.has(3));
s.delete(2);
console.log(s.has(2));

var properties = {
  'width': 1,
  'height': 1
}

var items = new Set([1,2,3,4,5,6]);
console.log(Array.from(items));

var set = new Set(['red', 'green', 'blue']);
for (let item of set.keys()) {
  console.log(item);
}
for (let item of set.values()) {
  console.log(item);
}
for (let item of set.entries()) {
  console.log(item);
}

var a = new Set([1,2,3]);
var b = new Set([4,3,2]);
console.log(new Set([...a, ...b]));
console.log(new Set([...a].filter(x => b.has(x))));
console.log(new Set([...a].filter(x => !b.has(x))));

var set = new Set([1,2,3]);
set = new Set([...set].map(val => val * 2));











