var fs = require('fs');

fs.readFile('../logo.png', function(err, buffer){
  console.log(Buffer.isBuffer(buffer));
  fs.writeFile('logoBuffer.png', buffer, function (err) {
    if (err) {
      console.log(err);
    }
  })

  var base64 = buffer.toString('base64');
  console.log(base64);
  var decodedImage = new Buffer(base64, 'base64');
  console.log(Buffer.compare(buffer, decodedImage));
  fs.writeFile('logoBuffer2.png', decodedImage, function (err) {
    if(err) {
      console.log(err);
    }
  })
})
