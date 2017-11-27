var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  // fs.readFile('../logo.png', function(err, data){
  //   if (err) {
  //     res.end('file not exist!')
  //     console.log(err);
  //   } else {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.end(data)
  //   }
  // })

  // fs.createReadStream('../logo.png').pipe(res)
}).listen(8888)