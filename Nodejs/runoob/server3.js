var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log(pathname);

  fs.readFile(pathname.substr(1), function(err, data) {
    if (err) {
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/html'})
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'})

      res.write(data.toString())
    }

    res.end();
  })
}).listen(8081);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8081/');
