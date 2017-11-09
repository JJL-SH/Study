// var Singleton = function (name) {
//   this.name = name;
//   this.instance = null;
// }
// Singleton.prototype.getName = function () {
//   console.log(this.name);
// }
// Singleton.getInstance = function (name) {
//   if (!this.name) {
//     this.instance = new Singleton(name);
//   }
//   return this.instance;
// }
// var a = Singleton.getInstance('sven1');
// var b = Singleton.getInstance('sven2');
// console.log(a === b);


// var CreateDiv = (function () {
//   var instance;
//   var CreateDiv = function (html) {
//     if (instance) {
//       return instance;
//     }
//     this.html = html;
//     this.init();
//     return instance = this;
//   }
//   CreateDiv.prototype.init = function () {
//     var div = document.createElement('div');
//     div.innerHTML = this.html;
//     document.body.appendChild(div);
//   }
//   return CreateDiv;
// })();



var percent = '30';
console.log(Math.round(30 / 10) / 2);