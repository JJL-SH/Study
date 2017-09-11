var http = require('http');
var qs = require('querystring');

http.createServer(function (req, res) {

  if (req.url == '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });

    res.end([
      '<form method="POST" action="/url">',
      '<h1>My Form</h1>',
      '<fieldset>',
      '<label>Personal information</label>',
      '<p>What is your name?</p>',
      '<input type="text" name="name">',
      '<p><button>Submit</button></p>',
      '</form>'
    ].join(''));
  } else if (req.url == '/url' && req.method == 'POST') {
    var body = '';

    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      res.end('<p>Your name is ' + qs.parse(body).name + '</p>');
    })
  } else {
    res.writeHead(404);
    res.end('Not Found');

  }
}).listen(3000);