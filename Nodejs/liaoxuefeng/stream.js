var fs = require('fs');

var rs = fs.createReadStream('./sample.txt', 'utf-8');

rs.on('data', function (chunk) {
  console.log('DATA:');
  console.log(chunk);
})
rs.on('end', function () {
  console.log('END');
})
rs.on('error', function (error) {
  console.log(error);
})