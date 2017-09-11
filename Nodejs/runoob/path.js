var path = require('path');

console.log('格式化路径：' + path.normalize('/test/test1//2asdasd/1fasda/tab/..'));
console.log('连接路径：' + path.join('/test', 'test1', '2asdasd/1fasda', 'tab', '..'));
console.log('转换为绝对路径：' + path.resolve('main.js'));
console.log('路径中文件的后缀名：' + path.extname('main.js'));
