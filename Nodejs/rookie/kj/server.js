var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.html', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/process_get', function(req, res) {
  // 输出JSON
  var response = {
    firstName: req.query.first_name,
    lastName: req.query.last_name
  }

  res.json(response)
})
app.post('/process_post', bodyParser.urlencoded({ extended: false }), function(req, res) {
  // 输出JSON
  var response = {
    firstName: req.body.first_name,
    lastName: req.body.last_name
  }
  res.json(response)
})
app.post('/file_upload', function(req, res) {
  console.log(req.files[0]);
  var filePath = path.join(__dirname, req.files[0].originalname);

  fs.readFile(req.files[0].path, function(err, data) {
    fs.writeFile(filePath, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        var response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname
        }
        res.json(response)
      }
    })
  })
})
app.listen(3000)