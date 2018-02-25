// function isType(type) {
//   return function(obj) {
//     return Object.prototype.toString.call(obj) === '[object '+type+']'
//   }
// }

// var isString = isType('String');
// var isArray = isType('Array');

// console.log(isString([1]))


var Type = {};

for(var i=0,type;type=['String','Array','Number'][i++];) {
  console.log(i, type)
}