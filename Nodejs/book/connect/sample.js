var connect = require('connect');
var time = require('./request-time.js');
var server = connect.createServer();

server.use(connect.logger('type is :res[content-type], length is :res[content-length] and it took :response-time ms.'));
server.use(time({time:500}));
server.use(function(req, res, next) {
  if (req.url == '/a') {
    res.writeHead(200);
    res.end('Fast!');
  } else {
    next();
  }
})
server.use(function(req, res, next) {
  if (req.url == '/b') {
    setTimeout(function() {
      res.writeHead(200);
      res.end('Slow!');
    }, 1000);
  } else {
    next();
  }
});
server.use('/my-images', connect.static('/website/images'));
server.listen(3000);