var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile(__dirname + url.parse(req.url).pathname, function(err, data) {
    if (err) {
      console.log(err);
      res.writeHead(404, {'Content-Type': 'text/html'})
    } else {
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
      res.write(data.toString());
    }
    res.end()
  })
}).listen(3000);