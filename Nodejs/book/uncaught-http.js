// var http = require('http');
// http.createServer(function()G{
//   throw new Error('错误不会被捕获');
// }).listen(3000)

// function c(){
//   b();
// }
// function b(){
//   a()
// }
// function a(){
//   setTimeout(function(){
//     throw new Error('here');
//   })
// }

// c()

console.log(1);
process.nextTick(function(){
  console.log(3);
})
console.log(2);