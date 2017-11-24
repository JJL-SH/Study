var fs = require('fs');
var path = require('path');
var http = require('http');

var MIME = {
  '.css': 'text/css',
  '.js': 'application/javascript'
}

function combineFile(pathnames, callback) {
  var output = [];
  (function next(index, length) {
    if (index < length) {
      fs.readFile(pathnames[index], function (error, data) {
        if (error) {
          callback(error);
        } else {
          output.push(data);
          next(++index, length);
        }
      })
    } else {
      callback(null, Buffer.concat(output));
    }
  })(0, pathnames.length);
}

function parseURL(root, url) {
  var base,pathnames,parts;

  if (url.indexOf('??') === -1) {
    url = url.replace('/', '/??')
  }
}
function main(argv) {
  var config = JSON.parse(fs.readFileSync(argv[0], 'utf-8'));
  var root = config.root || '.';
  var port = config.port || '80';

  http.createServer(function (request, response) {
    var
  })
}