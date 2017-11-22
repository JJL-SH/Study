const fs = require('fs');

// fs.readFile('./nodejs.jpg', function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString('utf-8'))
//   }
// })

var data = Math.random();
fs.writeFile('./sample.txt', data, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('ok');
  }
})

fs.stat('./sample.txt', function (error, stat) {
  if (error) {
    console.log(error);
  } else {
    console.log('isFile:' + stat.isFile());
    console.log('isDirectory:' + stat.isDirectory());
    if (stat.isFile()) {
      console.log('size:' + stat.size);
      console.log('birth time:' + stat.birthtime);
      console.log('modified time:' + stat.mtime);
    }
  }
})