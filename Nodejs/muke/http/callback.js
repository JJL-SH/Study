function learn(something) {
  console.log(something);
}
function we(callback, something) {
  something += ' is coll';
  callback(something);
}

we(learn, 'nodejs')

var c = 0;
function print() {
  console.log(c);
}
function plus(callback) {
  setTimeout(function () {
    c++;
    callback();
  }, 1000)
}

plus(print);
