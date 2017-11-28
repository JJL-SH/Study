var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'})
var address = require('./lib/address');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  console.log(res.locals);
  console.log(req.query);

  next();
})

app.get('/', function (req, res) {
  res.render('home')
})
app.get('/about', function (req, res) {
  res.render('about', {
    address: address.getAddress(),
    pageTestScript: '/qa/tests-about.js'
  })
})
app.get('/tours/hood-river', function (req, res) {
  res.render('tours/hood-river')
})
app.get('/tours/request-group-rate', function (req, res) {
  res.render('tours/request-group-rate')
})
app.get('/headers', function(req, res){
  console.log(req.params);
  res.set('Content-Type', 'text/plain');
  var s = '';
  for (var name in req.headers) {
    s += name + ':::' +req.headers[name] + '\n'
  }

  res.send(s)
})
app.use(express.static(__dirname + '/public'))

app.use(function(req, res){
  res.status(404);
  res.render('404');
})
app.use(function (err, req, res, next) {
  res.status(500);
  res.render('500');
})
app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + ';');
})