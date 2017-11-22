let http = require('http');
let url = require('url');

let start = (route, handle) => {
  let onRequest = (req, res) => {
    let pathname = url.parse(req.url).pathname;

    route(handle, pathname, res, req);
   }
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
}

exports.start = start;