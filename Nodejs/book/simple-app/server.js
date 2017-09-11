var express = require('express');
var app = express();

var search = require('./search');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', {layout: false});

app.get('/', function(req, res, next) {
  res.render('index')
});
app.post('/search', function(req, res, next) {
  console.log(req.params.q);
  res.end('111')
  // search(req.query.q, function(err, tweets) {
  //   res.render('search', {results: tweets, search: req.query.q});
  // });
})
app.get('/list/:id', function(req, res, next) {
  res.send(req.params.id);
})
app.listen(3000);