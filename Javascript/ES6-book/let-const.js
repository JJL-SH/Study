{
  let a = 10;
  var b = 1;
}

// console.log(a);
// console.log(b);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  }
}
a[6]();
a[1]();

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  }
}
a[6]();

function bar(x = y, y = 2) {
  console.log(x, y);
}
// bar();
