var http = require('http');

var options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
}

var callback = function(res) {
  var body = '';

  res.on('data', function(chunk) {
    body += chunk;
  })
  res.on('end', function() {
    console.log(body);
  })
}

var req = http.request(options, callback);
req.end();
