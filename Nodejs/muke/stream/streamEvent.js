var fs = require('fs');
var readStream = fs.createReadStream('streamCopyLogo.js');
readStream.on('data', function (chunk) {
  console.log('data emits');
  console.log(Buffer.isBuffer(chunk));
  console.log(chunk.toString('utf8'));
})
readStream.on('end', function (err) {
  if (err) {
    console.log(err);
  }
})
readStream.on('close', function () {
  console.log('OVER');
})