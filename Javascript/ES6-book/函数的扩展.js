

function test(x,y) {
  return x * y;
}
var result = test(1,1231);
console.log(result)

function m1({x=0,y=0} = {}) {
  console.log(x,y);
}
function m2({x,y} = {x:0,y:0}) {
  console.log(x,y);
}
m1();
m2();

m1({x:3,y:8});
m2({x:3,y:8});

m1({x:3});
m1({x:3});

m1({});
m2({});

m1({z:3});
m2({z:3});

var f = function() {};
console.log(f.name);

function foo(){};
console.log(foo.bind({}).name);

// function insert(value) {
//   return {into: function(array) {
//     return {after: function(afterValue) {
//       array.splice(array.indexOf(afterValue) + 1, 0, value);
//       return array;
//     }}
//   }}
// }

let insert = (value) => (
  {into:(array)=>(
    {after:(afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }}
  )}
);

console.log(insert(2).into([1,3]).after(1));


const pipeline = (...funcs) => {
  val => funcs.reduce((a,b)=>b(a))
}


function Fibonacci2(n ,ac1 = 1, ac2 = 1) {
  if(n<=1) {
    return ac2;
  }
  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}