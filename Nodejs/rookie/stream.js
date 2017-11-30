// var fs = require('fs');
// var data = '';

// var readStream = fs.createReadStream('./input.txt');
// readStream.setEncoding('utf-8');

// readStream.on('data', function(chunk) {
//   data += chunk;
// })
// readStream.on('end', function(){
//   console.log(data);
// })
// console.log('over');

// var fs = require('fs');
// var data = 'xxxxxx';

// var writerStream = fs.createWriteStream('./temp.txt', 'utf-8');

// writerStream.write(data);
// writerStream.end();
// writerStream.on('finish', function() {
//   console.log("写入完成。");
// });

// var fs = require('fs');

// var readStream = fs.createReadStream('./input.txt');
// var writerStream = fs.createWriteStream('./input2.txt');

// readStream.pipe(writerStream);


var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./input.txt.gz'));
// fs.createReadStream('./input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./input3.txt'))