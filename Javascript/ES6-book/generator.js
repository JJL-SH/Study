// var arr = [1,[[2,3],4],[5,6]];
// var flat = function *(a) {
//   var length = a.length;
//   for (var i = 0; i < length; i++) {
//     var item = a[i];

//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// }

// for (var f of flat(arr)) {
//   console.log(f);
// }



// function *foo(x) {
//   var y = 2 * (yield (x + 1));
//   var z = yield (y / 3);
//   return (x + y + x);
// }

// var a = foo(5);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// var b = foo(5);
// console.log(b.next());
// console.log(b.next(12));
// console.log(b.next(13));







// function wrapper(generatorFunction) {
//   return function (...args) {
//     let generatorObject = generatorFunction(...args);
//     generatorObject.next();
//     return generatorObject;
//   }
// }

// const wrapped = wrapper(function *() {
//   console.log(`First input:${yield}`);
//   return 'DONE';
// })

// wrapped().next('hello')


// function *fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     [prev, curr] = [curr, prev + curr];
//     console.log(':::::::' + curr);
//     yield curr;
//   }
// }

// for (let n of fibonacci()) {
//   if (n > 1000) {
//     break;
//   }
//   console.log(n);
// }

// function *objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj);

//   for (let propKey of propKeys) {
//     console.log(':::::::' + propKey);
//     yield [propKey, obj[propKey]];
//   }
// }

// let jane = {first: 'Jane', last: 'Doe'};

// for (let [key, value] of objectEntries(jane)) {
//   console.log(key, value);
// }

// var g = function *() {
//   try {
//     yield 111; 
//   } catch (e) {
//     console.log('内部捕获');
//   }
// }
// var i = g();
// console.log(':::::::', i.next());

// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部捕获', e);
// }


// console.log('::::::::::');
// var g = function *() {
//   while (true) {
//     try {
//       yield;
//     } catch (e) {
//       if (e != 'a') {
//         throw e;
//         console.log('内部捕获', e);
//       }
//     }
//   }
// }

// var i = g();
// console.log(i.next());

// try {
//   throw new Error('a');
//   throw new Error('b');
// } catch (e) {
//   console.log('外部捕获', e);
// }



// var g = function *() {
//   while (true) {
//     yield;
//     console.log('内部捕获', e);
//   }
// }
// var i = g();
// console.log(i.next());

// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部捕获', e);
// }


// var gen = function *gen() {
//   yield console.log('hello');
//   yield console.log('world');
// }

// var g = gen();
// g.next();

// try {
//   throw new Error();
// } catch (e) {
//   g.next()
// }


// function *foo(test) {
//   var x = yield 3;
//   var y = x.toUpperCase();

//   yield y;
// }

// var it = foo();
// console.log(it.next());

// try {
//   it.next(42);
// } catch (err) {
//   console.log(err);
// }


function *g() {
  yield 1;
  console.log('throwing an exception');
  throw new Error('generator broke');
  yield 2;
  yield 3;
}
function log(generator) {
  var v;
  console.log('starting generator');
  try {
    v = generator.next();
    console.log('first run next', v);
  } catch (err) {
    console.log('get error', v);
  }
  try {
    v = generator.next();
    console.log('second run next', v);
  } catch (err) {
    console.log('get error', v);
  }
  try {
    v = generator.next();
    console.log('third run next', v);
  } catch (err) {
    console.log('get error', v);
  }
}
log(g());


function *concat(iter1, iter2) {
  yield* iter1;
  yield* iter2;
}

function *concat(iter1, iter2) {
  for (var value of iter1) {
    yield value;
  }
  for (var value of iter2) {
    yield value;
  }
}


function* genFuncWithReturn() {
  yield 'a';
  yield 'b';
  return 'The result';
}
function* logReturned(genObj) {
  let result = yield* genObj;
  console.log(result);
}

console.log([...logReturned(genFuncWithReturn())])


function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}
function *intorder(t) {
  if (t) {
    yield* intorder(t.left);
    yield t.label;
    yield* intorder(t.right);
  }
}
function make(array) {
  if (array.length === 1) {
    return new Tree(null, array[0], null);
  }
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

var result = [];
for (let node of intorder(tree)) {
  result.push(node);
}

console.log(result);


function *g() {}
g.prototype.hello = function () {
  return 'hi';
}
var obj = g();

console.log(obj instanceof g);
console.log(obj.hello());

function *F() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}
var obj = {};
var f = F.call(obj);

console.log(f.next());
console.log(f.next());
console.log(f.next());

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

var ticking = true;
var clock = function () {
  if (ticking) {
    console.log('Tick');
  } else {
    console.log('Tock');
  }
  ticking = !ticking;
}

var clock = function *() {
  while (true) {
    console.log('Tick');
    yield;
    console.log('Tock');
    yield;
  }
}


var test = clock();
test.next();
test.next();
test.next();
test.next();


function *gen(x) {
  try {
    var y = yield x + 2;
  } catch (e) {
    console.log(e);
  }
  return y;
}
var g = gen(1);
g.next();
g.throw('ERROR')







// fs.readFile(fileName, callback);

// var Thunk = function (fileName) {
//   return function (callback) {
//     return fs.readFile(fileName, callback);
//   }
// }

// var readFileName = Thunk(fileName);
// readFileName(callback);


// var Thunk = function (fn) {
//   return function () {
//     var args = Array.prototype.slice.call(arguments);

//     return function (callback) {
//       args.push(callback);
//       return fn.apply(this, args);
//     }
//   }
// }

// var Thunk = function (fn) {
//   return function (...args) {
//     return function (callback) {
//       return fn.call(this, ...args, callback);
//     }
//   }
// }



function *gen() {
  // body...
}

var g = gen();
var res = g.next();

while(!res.done) {
  console.log(res.value);
  res = g.next();
}



















