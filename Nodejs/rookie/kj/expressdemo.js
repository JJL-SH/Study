var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('xxxxx')
})

var server = app.listen(3000, function() {
  console.log(this.address);
  var host = this.address().address;
  var port = this.address().port;

  console.log('Server started address is http://%s:%s', host, port);
})