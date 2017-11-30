var http = require('http');
var options = {
  host: 'localhost',
  port: 3000,
  path: '/input.txt'
}

var req = http.request(options, function(res){
  var body = ''

  res.on('data', function(chunk){
    body += chunk;
  })
  res.on('end', function(){
    console.log(body);
  })
})
req.end();