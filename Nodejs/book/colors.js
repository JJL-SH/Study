// require('colors');
// console.log('smashing node'.random);

// var a = function a() {
//   console.log(typeof a == 'function');
// }
// a();

// function a() {
//   console.log(window == this);
// }
// a();

// function a() {
//   // {a:'b'}
//   console.log(this.a == 'b');
// }
// a.call({a:'b'});

// function a(b, c) {
//   console.log(b == 'first');
//   console.log(c == 'second');
// }
// a.call({a:'b'}, 'first', 'second');
// a.apply({a:'b'}, ['first', 'second'])

// var a = function (a, b, c) {

// }
// console.log(a.length == 3);

// var a = 5;
// function woot() {
//   var a = 6;
//   console.log('>>>', a);
//   function test() {
//     console.log('>>>', a);
//   }
//   test();
// }
// woot();

// var a = 3;
// (function () {
//   var a = 5;
// })()
// console.log(a == 3);

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.getName = function () {
//   return this.name;
// }
// var animal = new Animal('tobi');
// console.log(animal.getName())

// function Ferret() {

// }
// Ferret.prototype = new Animal();
// Ferret.prototype.type = 'domestic';
// Ferret.prototype.eat = function (food) {

// var a = 5;
// try {
//   a();
// } catch (error) {
//   console.log('aaa');
// }

// var a = {a:1,b:2};
// Object.prototype.c = 3;
// for (var i in a) {
//   if (!a.hasOwnProperty(i)) {
//     continue;
//   }
//   console.log(i);
// }

// console.log(Object.keys(a));

// function a() {
//   console.log(this.hello == 'world');
// }
// var b = a.bind({hello:'world'});
// b();

// var a = function woot(){};
// console.log(a.name);

// var woot = function buggy(){
//   throw new Error();
// }
// woot();





// Date.prototype.__defineGetter__('ago', function () {
//   var diff = ((new Date()).getTime() - this.getTime()) / 1000;
//   var dayDiff = Math.floor(diff / 86400);

//   return dayDiff == 0 &&
//   diff < 60 && 'just now' ||
//   diff < 120 && '1 minute age' ||
//   diff < 3600 && Math.floor(diff/60)+' minutes ago' ||
//   diff < 72000 && '1 hour ago' ||
//   diff < 86400 && Math.floor(diff/3600)+' hours age' ||
//   dayDiff < 7 && dayDiff+' days age' ||
//   Math.ceil(dayDiff/7)+' weeks age';
// })

// var a = new Date('7/13/2017');
// console.log(a.ago);

// var start = Date.now();

// setTimeout(function(){
//   console.log(Date.now() - start);
//   for (var i = 0; i < 100000000000000; i++) {

//   }
// }, 1000)
// setTimeout(function () {
//   console.log(Date.now() - start);
// }, 2000)


function c () {
  console.log('c');
  console.trace();
}
function b () {
  console.log('b');
  c();
}
function a () {
  console.log('a');
  b();
}
a();