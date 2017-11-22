let server = require('./server');
let route = require('./route');
let requestHandlers = require('./requestHandlers');

let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;

server.start(route.route, handle);