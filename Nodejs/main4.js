// buf = new Buffer(256);
// len = buf.write('刘佳杰');
//
// console.log('写入字节数' + len);


// buf = new Buffer(26);
// for (var i = 0; i < 26; i++) {
//   buf[i] = i + 97;
// }
//
// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii',0 ,5));
// console.log(buf.toString('utf8',0 ,5));
// console.log(buf.toString(undefined, 0 ,5));


// 转换为 JSON 格式
// var buf = new Buffer('www.baidu.com');
// var json = buf.toJSON(buf);
//
// console.log(json);


// 合并缓冲区
// var buffer1 = new Buffer('11111');
// var buffer2 = new Buffer('aaaaa');
// var buffer3 = Buffer.concat([buffer1, buffer2]);
// console.log('Buffer3内容 ' + buffer3.toString());


// 比较缓冲区
// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer('ABCD');
// var result = buffer1.compare(buffer2);
//
// if (result < 0) {
//   console.log(buffer1 + "在" + buffer2 + "之前");
// } else if (result === 0) {
//   console.log(buffer1 + "与" + buffer2 + "相同");
// } else {
//   console.log(buffer1 + "在" + buffer2 + "之后");
// }


// 拷贝缓冲区
// var buffer1 = new Buffer('ABC');
// var buffer2 = new Buffer(3);
// buffer1.copy(buffer2);
// console.log('buffer2 content:' + buffer2.toString());


// 缓冲区裁剪
var buffer1 = new Buffer('runoob');
var buffer2 = buffer1.slice(0, 2);
console.log('buffer2 content:' + buffer2);
