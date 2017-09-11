var net = require('net');
var count = 0;
var users = {};

var server = net.createServer(function (conn) {
  var nickname;

  function broadchat (msg, exceptMyself) {
    for (var user in users) {
      if (!exceptMyself || user != nickname) {
        users[user].write(msg);
      }
    }
  }

  count++;
  conn.write(
    '\n > welcome to \033[92m node-chat \033[39m!' +
    '\n > ' + count + ' other people are connected at this time.' +
    '\n > please write your name and press enter:'
  )
  conn.on('close', function () {
    count--;
    delete users[nickname];
    broadchat('\033[90m > ' + nickname + ' left the room \033[39m \n');
  })
  conn.on('data', function (data) {
    data = data.replace('\r\n', '');

    if (!nickname) {
      if (users[data]) {
        conn.write('\033[90m > nickname already in use. try again: \033[39m');
        return;
      } else {
        nickname = data;
        users[nickname] = conn;

        broadchat('\033[90m > ' + nickname + ' joined the room \033[39m \n');
      }
    } else {
      broadchat('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true);
    }
  })
  conn.setEncoding('utf8');
});

server.listen(3000, function () {
  console.log('\033[96m server listening on *:3000 \033[39m');
});
