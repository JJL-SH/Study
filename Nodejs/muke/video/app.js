var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.listen(port);

console.log('video started on port:' + port);

app.get('/', function(req, res){
  res.render('./index', {
    title: '首页'
  })
})
app.get('/detail/:id', function(req, res){
  res.render('detail', {
    title: '详情页'
  })
})
app.get('/admin/video', function(req, res){
  res.render('admin', {
    title: '后台页'
  })
})
app.get('/admin/list', function(req, res){
  res.render('admin', {
    title: '列表页'
  })
})
