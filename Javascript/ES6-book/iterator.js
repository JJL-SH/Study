var it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ? {value:array[nextIndex++],done: false} : {value:undefined,done:true};
    }
  }
}

var obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          doen: true
        }
      }
    }
  }
}

// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }
//   [Symbol.iterator]() {
//     return this;
//   }
//   next() {
//     var value = this.value;

//     if (value < this.stop) {
//       this.value++;
//       return {
//         done: false,
//         value: value
//       }
//     }
//     return {
//       down: true,
//       value: undefined
//     }
//   }
// }
// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }
// for (var value of range(0, 3)) {
//   console.log(value);
// }


// function Obj(value) {
//   this.value = value;
//   this.next = null;
// }
// Obj.prototype[Symbol.iterator] = function () {
//   var iterator = {next: next};
//   var current = this;

//   function next() {
//     if (current) {
//       var value = current.value;

//       current = current.next;
//       return {
//         done: false,
//         value: value
//       }
//     } else {
//       return {
//         down: true
//       }
//     }
//   }
//   return iterator;
// }

// var one = new Obj(1);
// var two = new Obj(2);
// var three = new Obj(3);

// for (var i of one) {
//   console.log(i);
// }

var set = new Set().add('a').add('b').add('c');
var [x, ...y] = set;
console.log(x, y);

var generator = function *() {
  yield 1;
  yield* [2,3,4];
  yield 5;
}
var iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


var myIterable = {};
myIterable[Symbol.iterator] = function *() {
  yield 1;
  yield 2;
  yield 3;
};
console.log([...myIterable]);

var obj = {
  [Symbol.iterator]: function*() {
    yield 'hello';
    yield 'world';
  }
}
for (let x of obj) {
  console.log(x);
}


var arr = ['a', 'b', 'c', 'd'];
for (let a in arr) {
  console.log(a);
}
for (let a of arr.entries()) {
  console.log(a);
}


var es6 = new Map();
es6.set('edition', 6);
es6.set('committee', 'TC39');
es6.set('standard', 'ECMA-262');

for (var [name, value] of es6) {
  console.log(name, value);
}















