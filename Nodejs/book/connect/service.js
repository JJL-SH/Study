var http = require('http');
var fs = require('fs');
var connect = require('connect');

http.createServer(function(req, res) {
  var method = req.method;
  var url = req.url;

  if (method == 'GET' && url.substr(0, 7) == '/images' && url.substr(-4) == '.jpg') {
    fs.stat(__dirname + req.url, function(err, stat) {
      if (err || !stat.isFile()) {
        notFound(res);
      }

      server(res, __dirname + req.url, 'application/jpg');
    })
  } else if (method == 'GET' && url == '/') {
    server(res, __dirname + '/index.html', 'text/html');
  } else {
    notFound(res);
  }
}).listen(3000);

function server(res, path, type) {
  res.writeHead(200, {'Content-Type': type});
  fs.createReadStream(path).pipe(res);
}
function notFound(res) {
  res.writeHead(404);
  res.end('Not Found');
  return;
}
