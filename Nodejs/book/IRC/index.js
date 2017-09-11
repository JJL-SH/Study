var net = require('net');
var client = net.connect(6667, 'irc.freenode.net');

client.setEncoding('utf-8');

client.on('connect', function () {
  client.write('NICK munick\r\n');
  client.write('USER munick 0 * :realname\r\n');
  client.write('JOIN #node.js\r\n');
})
