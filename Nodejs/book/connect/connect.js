var connect = require('connect');
var server = connect.createServer();

server.use(connect.static(__dirname + '/website'));
server.use(function(req, res, next) {
  console.log(' %s %s ', req.method, req.url);
  next();
});
server.use(function(req, res, next) {
  if (req.method == 'GET' && req.url.substr(0, 7) == '/images') {
    console.log('图片加载');
  } else {
    console.log('不是图片加载');
  }
  next();
})
server.listen(3000);