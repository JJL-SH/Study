var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello Get');
})
app.post('/', function(req, res) {
  res.send('Hello Post')
})
app.get('/del_user', function(req, res) {
  res.send('删除页面');
})
app.get('/list_user', function(req, res) {
  res.send('列表页面');
})
app.get('/abc*xyz', function(req, res) {
  res.send('正则匹配页面')
})
app.use(express.static('public'))

app.listen(3000)