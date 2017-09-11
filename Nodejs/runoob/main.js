var fs = require('fs');
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

fs.readFile('input.txt', function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
})
console.log('执行结束');
