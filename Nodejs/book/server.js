var http = require('http');
var fs = require('fs');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'image/jpg'});

//   var stream = fs.createReadStream('./image.jpg').pipe(res);
//   // stream.on('data', function (data) {
//   //   res.write(data);
//   // })
//   // stream.on('end', function () {
//   //   res.end();
//   // })
// }).listen(3000)

http.createServer(function(req, res) {
  console.log(req.headers);
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('Hello <b>World</b>');
}).listen(3000);