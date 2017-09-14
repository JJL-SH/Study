console.log('\u{20bb7}');
console.log('�'.charCodeAt('0').toString(16));

let hello = 123;
console.log(hell\u{6f});

var s = '𠮷';
console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));

var s = '𠮷a';

console.log(s.codePointAt(0));
console.log(s.codePointAt(1));
console.log(s.codePointAt(2));

for (let ch of s) {
  console.log(ch.codePointAt(0).toString(16));
}

// console.log('x'.padStart(5,'ab'));


var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} width tax)`;

function passthru1(literals) {
  var result = '';
  var i = 0;

  while (i < literals.length) {
    result += literals[i++];

    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}
function passthru(literals, ...values) {
  let output = '';

  for (var index = 0; index <= values.length; index++) {
    output += literals[index] + (values[index] || '');
  }

  return output;
}

// console.log(msg);
