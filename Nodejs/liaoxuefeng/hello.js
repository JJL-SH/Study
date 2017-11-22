// const http = require('http');

// const server = http.createServer(function (req, res) {
//   console.log(req.method + ':' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<h1>xxxx</h1>');
// })

// server.listen(8888);
// console.log('Server is running at http://127.0.0.1:8888/');


// const url = require('url');
// const link = 'http://user:pass@host.com:8080/path/to/file?query=string#hash'

// console.log(url.parse(link));


const path = require('path');

console.log(path.resolve('./'));
console.log(path.join(path.resolve('./'), 'xxxxx', 'index.html'));