function f(x, y) {
  return {x,y};
}

let target = {a:1};
let source1 = {a:2};
let source2 = {c:3};

Object.assign(target, source1, source2);

console.log(target);