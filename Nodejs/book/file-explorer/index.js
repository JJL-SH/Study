var fs = require('fs');
var stdin = process.stdin;
var stdout = process.stdout;


fs.readdir(process.cwd(), function (err, files) {
  file(0);
  var stats = [];
  function file(i) {
    var filename = files[i];

    fs.stat(__dirname + '/' + filename, function (err, stat) {
      stats[i] = stat;
      if (stat.isDirectory()) {
        console.log(' ' + i + '\033[36m' + filename + '/\033[39m');
      } else {
        console.log(' ' + i + '\033[90m' + filename + '\033[39m');
      }
      if (++i == files.length) {
        read();
      } else {
        file(i);
      }
    })
  }
  function read() {
    console.log('');
    stdout.write('\033[33m Enter your choice: \033[39m');
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', option);
  }
  function option(index) {

    var file = files[index * 1];
    if (stats[index*1].isDirectory()) {
      fs.readdir(__dirname + '/' + file, 'utf8', function (err, data){
        console.log('');
        console.log('(' + data.length + ')');
        data.forEach(function (file) {
          console.log('-' + file);
        })
        console.log('');
      })
    } else {
      fs.readFile(__dirname + '/' + file, 'utf8', function (err, data){
        console.log('');
        console.log('\033[90m' + data + '\033[39m');
      })
    }

  }
})