// var fs = require('fs');

// fs.readFile('./input.txt', function (error, data) {
//   if (error) {
//     console.log(error);
//   }

//   console.log('异步读取文件内容：' + data);
// })

// console.log('同步读取文件内容：' + fs.readFileSync('./input.txt'));
// console.log('文件读取完毕');

// 异步打开文件
// console.log('准备打开文件');
// fs.open('./input.txt', 'r+', function(err, fs){
//   if (err) {
//     console.log(err);
//   }
//   console.log('文件打开成功');
// })


// fs.stat('./input.txt', function (err, stats) {
//   console.log(stats.isDirectory());
// })


// console.log("准备写入文件");
// fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("数据写入成功！");
//    console.log("--------我是分割线-------------")
//    console.log("读取写入的数据！");
//    fs.readFile('input.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       console.log("异步读取文件数据: " + data.toString());
//    });
// });



var fs = require("fs");
// var buf = new Buffer(1024);

// console.log("准备打开已存在的文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("文件打开成功！");
//    console.log("准备读取文件：");
//    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//       if (err){
//          console.log(err);
//       }
//       console.log(bytes + "  字节被读取");

//       // 仅输出读取的字节
//       if(bytes > 0){
//          console.log(buf.slice(0, bytes).toString());
//       }
//    });
// });

// fs.mkdir('./tmp', function(err){
//   if (err) {
//     console.log(err);
//   }
// })

fs.readdir('/tmp/', function(err, files) {
  if (err) {
    console.log(err);
  }

  files.forEach(function(file) {
    console.log(file);
  })
})