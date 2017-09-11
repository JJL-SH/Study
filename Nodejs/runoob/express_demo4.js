var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.get('/apiget', function(req, res) {
  var response = {
    "first_name": req.query.first_name,
    "last_name": req.query.last_name
  }

  console.log(response);
  res.send(JSON.stringify(response));
})

var server = app.listen(8081);
