function push(item) {
  this.items[this.top++] = item;
}
function pop() {
  if (this.top === 0) {
    return;
  }
  var item = this.items[this.top - 1];
  this.items.length = --this.top;
  return item;
}
function size() {
  return this.top;
}
function empty() {
  return this.top === 0;
}
function peek() {
  return this.items[this.top - 1];
}
function clear() {
  this.item = [];
  this.top = 0;
}

function Stack() {
  this.items = [];
  this.top = 0;
}
Stack.prototype = {
  construcuor: Stack,
  push: push,
  pop: pop,
  size: size,
  empty: empty,
  peek: peek,
  clear: clear
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

function factorial2(n) {
  var s = new Stack();
  var result = 1;

  while ( n > 1) {
    s.push(n--);
  }
  while (s.size() > 0) {
    result *= s.pop();
  }
  return result;
}
console.log(factorial2(5));