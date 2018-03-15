// let text = '𠮷';
// console.log(text.length)
// console.log(/^.$/.test(text))
// console.log(text.charAt(0))
// console.log(text.charAt(1))
// console.log(text.charCodeAt(0))
// console.log(text.charCodeAt(1))


let text = '𠮷a';

function codePointLength(text) {
  let ret = text.match(/[\s\S]/gu)
  console.log(ret)
  return ret ? ret.length: 0
}

console.log(codePointLength(text))