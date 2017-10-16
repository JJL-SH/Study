/*
* @Author: Bob.Liu
* @Date:   2017-10-13 09:53:35
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-16 14:46:26
*/
// var arr = [1, [[[0],2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   for (var item of a) {
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// };

// for (var f of flat(arr)){
//   console.log(f);
// }

// var myIterable = {};
// myIterable[Symbol.iterator] = function *() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// console.log([...myIterable]);

// function *foo(x) {
//   // x: 5
//   var y = 2 * (yield (x + 1));
//   // y: 24
//   var z = yield (y / 3);
//   // z: 13

//   return (x + y + z);
// }
// var a = foo(5);
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// var b = foo(5);
// console.log(b.next());
// console.log(b.next(12));
// console.log(b.next(13));

// function *dataConsumer() {
//   console.log('Started');
//   console.log(`1. ${yield}`);
//   console.log(`2. ${yield}`);
//   return 'result';
// }
// let genObj = dataConsumer();
// genObj.next();
// genObj.next('a');
// genObj.next('b');


// function wrapper(generatorFunction) {
//   return function () {
//     let generatorObject = generatorFunction();
//     generatorObject.next();
//     return generatorObject;
//   }
// }
// var wrapped = wrapper(function *() {
//   console.log(`First input: ${yield}`);
//   return 'DONE';
// })
// wrapped().next('hello');


// function *objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj);

//   for (let propKey of propKeys) {
//     yield [propKey, obj[propKey]];
//   }
// }
// let jane = {first: 'Jane', last: 'Dow'};

// for (let [key, value] of objectEntries(jane)) {
//   console.log(`${key}: ${value}`);
// }


// var g = function *() {
//   try {
//     yield 111;
//   } catch (e) {
//     console.log('内部捕获', e);
//   }
// }
// var i = g();
// console.log(i.next())

// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部捕获', e);
// }



// var gen = function *gen() {
//   try {
//     yield console.log('a');
//   } catch (e) {

//   }
//   yield console.log('b');
//   yield console.log('c');
// }
// var g = gen();
// g.next();
// g.throw();
// g.next();



// var gen = function *gen() {
//   yield console.log('hello');
//   yield console.log('world');
// }
// var g = gen();
// g.next();

// try {
//   throw new Error();
// } catch (e) {
//   g.next();
// }

// function *g() {
//   yield 1;
//   console.log('throwing an exception');
//   throw new Error('generator broke!')
//   yield 2;
//   yield 3;
// }

// function log(generator) {
//   var v;
//   console.log('starting generator');
//   try {
//     v = generator.next();
//     console.log('第1次运行next方法', v);
//   } catch (e) {
//     console.log('捕获错误', e);
//   }
  
//   try {
//     v = generator.next();
//     console.log('第2次运行next方法', v);
//   } catch (e) {
//     console.log('捕获错误', e);
//   }
  
//   try {
//     v = generator.next();
//     console.log('第3次运行next方法', v);
//   } catch (e) {
//     console.log('捕获错误', e);
//   }
//   console.log('caller done');
// }
// log(g())


// function *foo() {
//   yield 'a';
//   yield 'b';
// }
// function *bar() {
//   yield 'x';
//   yield *foo();
//   yield 'y';
// }
// for(let v of bar()) {
//   console.log(v);
// }


// function *inner() {
//   yield 'hello';
// }
// function *outer1() {
//   yield 'open';
//   yield *inner();
//   yield 'close';
// }
// var gen = outer1();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// var delegatedIterator = function *() {
//   yield 'hello';
//   yield 'bye';
// }
// var delegatingIterator = function *() {
//   yield 'greetings';
//   yield *delegatedIterator();
//   yield 'ok,bye';
// }
// for (let value of delegatingIterator()) {
//   console.log(value);
// }

// function *foo() {
//   yield 2;
//   yield 3;
//   return 'foo';
// }
// function *bar() {
//   yield 1;
//   var v = yield *foo();
//   console.log('v:' + v);
//   yield 4;
// }
// var it = bar();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function *genFuncWithReturn() {
//   yield 'a';
//   yield 'b';
//   return 'the result';
// }
// function *logReturned(genObj) {
//   let result = yield *genObj;
//   console.log(result);
// }
// console.log([...logReturned(genFuncWithReturn())]);

// function *iterTree(tree) {
//   if (Array.isArray(tree)) {
//     for (let i = 0; i < tree.length; i++) {
//       yield *iterTree(tree[i]);
//     }
//   } else {
//     yield tree;
//   }
// }

// var tree = ['a',['b','c'],['d','e']];
// for (let x of iterTree(tree)) {
//   console.log(x);
// }




// function Tree(left, label, right) {
//   this.left = left;
//   this.label = label;
//   this.right = right;
// }

// function *inorder(t) {
//   if (t) {
//     yield *inorder(t.left);
//     yield t.label;
//     yield *inorder(t.right);
//   }
// }
// function make(array) {
//   if (array.length == 1) {
//     return new Tree(null, array[0], null);
//   }
//   return new Tree(make(array[0]), array[1], make(array[2]));
// }
// var tree = make([['a'], 'b', ['c'], 'd', [['e'], 'f', ['g']]]);

// var result = [];
// for (let node of inorder(tree)) {
//   result.push(node)
// }

// console.log(result);

// function *g() {
//   // body...
// }
// g.prototype.hello = function () {
//   return 'hi!';
// }
// var obj = g();

// console.log(obj instanceof g);
// console.log(obj.hello());

// function *F() {
//   this.a = 1;
//   yield this.b = 2;
//   yield this.c = 3;
// }
// var obj = {};
// var f = F.call(obj);
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);



function* gen() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

function F() {
  return gen.call(gen.prototype);
}

var f = new F();

console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.a);
console.log(f.b);
console.log(f.c);


var ticking = true;
var clock = function () {
  if (ticking) {
    console.log('Tick');
  } else {
    console.log('Tock');
  }

  ticking = !ticking;
}


// clock()
// clock()
// clock()


var clock = (function *() {
  while (true) {
    console.log('Tick');
    yield;
    console.log('Tock');
    yield;
  }
})()

clock.next();
clock.next();
clock.next();



// function *loadUI() {
//   showLoadingScreen();
//   yield loadUIDataAsynchronously();
//   hideLoadingScreen();
// }
// var loader = loadUI();
// loader.next()
// loader.next()


// function *longRunningTask(value1) {
//   try {
//     var value2 = yield step1(value1);
//   }
// }


function *iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}
var myObj = {foo: 3, bar: 7};
for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value);
}




