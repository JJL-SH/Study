let http = require('http');
let url = require('url');

let start = () => {
  let onRequest = (req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log('xxxxxxx', pathname);


    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

exports.start = start;