// var cache = [];
// var miniConsole = {
//   log: function () {
//     var args = arguments;
//     cache.push(function () {
//       return miniConsole.log.apply(miniConsole, args);
//     })
//   }
// }

miniConsole = {
  log: function () {
    console.log(Array.prototype.join.call(arguments, '___'));
  }
}