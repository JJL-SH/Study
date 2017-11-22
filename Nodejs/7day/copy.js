// const fs = require('fs');

// function copy(src, dst) {
//   fs.createReadStream(src).pipe(fs.createWriteStream(dst));
// }
// function main(argv) {
//   copy(argv[0], argv[1]);
// }
// main(process.argv.slice(2))

var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(bin.toString('utf-8'));
console.log(new Buffer('hello', 'utf-8'));

var dup = new Buffer(bin.length);
bin.copy(dup)

dup[0] = 0x48;

console.log(dup.toString('utf-8'));