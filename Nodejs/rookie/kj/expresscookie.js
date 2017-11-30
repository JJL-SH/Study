var express = require('express');
var app = express();
var cookieparser = require('cookie-parser');

app.use(cookieparser());

app.get('/', function(req, res) {
  console.log(req.cookies);
})

app.listen(3000)