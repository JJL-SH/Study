var fs = require('fs');

var readStream = fs.createReadStream('../logo.png');
var writeStream = fs.createWriteStream('./test.png');

readStream.on('data', function(chunk){
  writeStream.write(chunk)
})
readStream.on('end', function(){
  writeStream.end()
})