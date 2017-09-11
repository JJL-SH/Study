var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('image'))

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + '/upload.html');
})

app.post('/file_upload', function(req, res) {
  // 上传文件信息
  console.log(req.files[0]);
  var file = req.files[0];

  var des_file = __dirname + '/' + file.originalname;

  fs.readFile(file.path, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      response = {
        message: 'File uploaded successfully',
        filename: file.originalname
      }
      console.log(response);
      res.end(JSON.stringify(response));
    }
  })
})

var server = app.listen(8081);
