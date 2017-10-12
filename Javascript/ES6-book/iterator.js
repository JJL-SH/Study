/*
* @Author: Bob.Liu
* @Date:   2017-10-12 09:35:06
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-12 14:22:46
*/

var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
  var nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length ? {value: array[nextIndex++], done: false} : {value: undefined, done: true};
    }
  }
}

var it = idMaker();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function idMaker() {
  var index = 0;

  return {
    next: function () {
      return {value: index++, done: false}
    }
  }
}

var arr = [1,2,3,4,5,6,7];
var iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    var value = this.value;

    if (value < this.stop) {
      this.value++;
      return {
        done: false, 
        value: value
      }
    }
    return {
      done: true,
      value: undefined
    }
  }
}
function range(start, stop) {
  return new RangeIterator(start, stop);
}
for (var value of range(0, 3)) {
  console.log(value);
}



console.log([...'1234567890']);

var myIterable = {};
myIterable[Symbol.iterator] = function *() {
  yield 1;
  yield 2;
  yield 3;
}
console.log([...myIterable]);


var obj = {
  *[Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
}
for (var x of obj) {
  console.log(x);
}

var arrayLike = {length:2,0:'a',1:'b'};
for (var temp of [Array.from(arrayLike)]) {
  console.log(temp);
}

var es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for (var key of Object.keys(es6)) {
  console.log(key);
}

function *entries(obj) {
  for (var key of Object.keys(es6)) {
    yield [key, obj[key]];
  }
}
for (var [key, value] of entries(es6)) {
  console.log(key, '->', value);
}
