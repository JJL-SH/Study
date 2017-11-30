// var buf = new Buffer(256);
// var len = buf.write('xxxx')
// console.log(len);

var buf = new Buffer('www.baidu.com');
var json = buf.toJSON();

console.log(new Buffer(json.data).toString());