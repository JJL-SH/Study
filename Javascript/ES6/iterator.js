function idMaker() {
  var index = 0;

  return {
    next: function() {
      return {
        value: index++,
        done: false
      }
    }
  }
}

var it = idMaker();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


let set = new Set().add('a').add('b').add('c');
let [x,y] = set;








function* gen(x) {
  try {
    var y = yield x + 2;
  } catch (e) {
    console.log(e);
  }

  return y;
}

var g = gen(1);
g.next();
g.throw('出错了');


