const http = require('http'),
      url = require('url'),
      path =  require('path'),
      fs = require('fs');

const root =path.resolve(process.argv[2] || '.');

console.log('static root dir:' + root);

const server = http.createServer(function(req, res) {
  let pathname = url.parse(req.url).pathname;
  let filepath = path.join(root, pathname);

  fs.stat(filepath, function(error, stat) {
    if (!error && stat.isDirectory()) {
      fs.readdir(filepath, function (err, files) {
        if (err) {
          fail(req, res);
        } else if (files.includes('index.html')) {
          filepath = path.join(filepath, 'index.html')
          success(filepath, req, res);
        } else if (files.includes('default.html')) {
          filepath = path.join(filepath, 'index.html')
          success(filepath, req, res);
        }
      })
    } else if (!error && stat.isFile()) {
      success(filepath, req, res);
    } else {
      fail(req, res);
    }
  })
})

function success(filepath, req, res) {
  console.log('200 ' + req.url);
  res.writeHead(200);
  fs.createReadStream(filepath).pipe(res);
}
function fail(req, res) {
  console.log('404 ' + req.url);
  res.writeHead(404);
  res.end('404 Not Found');
}

server.listen(8888)