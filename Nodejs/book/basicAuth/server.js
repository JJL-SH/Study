var connect = require('connect');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var server = connect(
  connect.basicAuth(function(user, pass, fn) {
    process.stdout.write('Allow user \033[96m' + user + '\033[39m with pass \033[90m' + pass + '\033[39m ? [y/n]:');
    process.stdin.once('data', function(data) {
      if (data[0] == 'y') {
        fn(null, {username: user});
      } else {
        fn(new Error('Unanthorized'));
      }
    })
  }),
  function(req, res) {
    res.writeHead(200);
    res.end('Welcome to the protected area, ' + req.remoteUser.username);
  }
);

server.listen(3000)