function jisuan(...values) {
  var number = 0;
  for (var i = values[0]; i <= values[1]; i++) {
    number += i;
  }


  console.log(number);
}

jisuan(1,100)



var people = ['张三','李四','王五'];

function sayHello(people1, people2, people3) {
  console.log(`Hello ${people1},${people2},${people3}`);
}
sayHello(...people);
sayHello.apply(null,people);