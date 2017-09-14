let s = 'aaa_aa_a';
let r = /a+_/y;

console.log(r.exec(s));
console.log(r.exec(s));




const REGEX = /a/g;
REGEX.lastIndex = 2;
const match = REGEX.exec('xaya');
console.log(match);

console.log('x##'.split(/#/y));
console.log('##x'.split(/#/y));

console.log('aaxa'.replace(/a/gy, '-'));