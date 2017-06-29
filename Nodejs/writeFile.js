var fs = require('fs');

console.log('准备写入文件');
fs.writeFile('input.txt', '我是通过写入文件的内容！', function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('数据写入成功！');
  console.log('-------------我是分割线--------------');
  console.log('读取写入数据');
  fs.readFile('input.txt', function(err, data) {
    if (err) {
      return console.error(err);
    }

    console.log('刚刚写入的数据是：' + data.toString());
  })
})
