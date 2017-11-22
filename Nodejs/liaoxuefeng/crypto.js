const crypto = require('crypto');
const hash = crypto.createHash('md5');

hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));