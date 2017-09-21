var obj = new Proxy({}, {
  get: function (target, key, reveiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, reveiver);
  },
  set: function (target, key, value, reveiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, reveiver);
  }
})

obj.count = 1;
++obj.count;


var proxy = new Proxy({}, {
  get: function (target, property) {
    return 100;
  }
})

var obj = Object.create(proxy);
console.log(obj.name)
console.log(obj.age)


var handler = {
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },
  apply: function (target, thisBinding, args) {
    return args[0];
  },
  construct: function (target, args) {
    return {value: args[1]}
  }
}

var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);
console.log(fproxy(1, 2));
console.log(new fproxy(1, 2));
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo);

// var pipe = (function(){
//   return function (value) {
//     var funcStack = [];
//     var oproxy = new Proxy({}, {
//       get: function (pipeObject, fnName) {
//         if (fnName == 'get') {
//           return funcStack.reduce(function (val, fn) {
//             return fn(val);
//           }, value);
//         }
//         funcStack.push(global[fnName]);
//         return oproxy;
//       }
//     })
//     return oproxy;
//   }
// }());
// var double = n => n * 2;
// var pow = n => n * n;
// var reverseInt = n => n.toString().split('').reverse().join('') | 0;

// console.log(pipe(3).double.pow.reverseInt.get)

var target = function () {
  return 'I am the target';
}
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
}
var p = new Proxy(target, handler);
console.log(p())

var twice = {
  apply (target, ctx, args) {
    return Reflect.apply(...arguments) * 2;
  }
}
function sum(left, right) {
  return left + right;
}
var proxy = new Proxy(sum, twice);
console.log(proxy(1,2));
console.log(proxy.call(null, 5, 6));
console.log(proxy.apply(null, [7, 8]));


// var obj = {a:10};
// Object.preventExtensions(obj);

// var p = new Proxy(obj, {
//   has: function (target, prop) {
//     return false;
//   }
// })
// console.log('a' in p);
console.log('==============');
var stu1 = {name:'bob', score: 59};
var stu2 = {name:'lisa', score: 99};

var handler = {
  has(target, prop) {
    if (prop === 'score' && target[prop] < 60) {
      console.log(`${target.name} 不及格`);
      return false;
    }
    return prop in target;
  }
}

var oproxy1 = new Proxy(stu1, handler);
var oproxy2= new Proxy(stu2, handler);

console.log('score' in oproxy1);
console.log('score' in oproxy2);

for (let a in oproxy1) {
  console.log(oproxy1[a]);
}

console.log('============');
var p = new Proxy(function () {}, {
  construct: function (target, args) {
    console.log('called:' + args.join(', '));
    return {value: args[0] * 10}; 
  }
})

console.log((new p(1,2,3)).value);

var handler = {
  deleteProperty (target, key) {
    invariant(key, 'delete');
    return true;
  }
}

function invariant(key, action) {
  if (key[0] === '_') {
    throw new Error('xxxxxx');
  }
}
var target = {_prop: 'foo'};
var proxy = new Proxy(target, handler);
// delete proxy._prop;

var handler = {
  defineProperty (target, key, descriptor) {
    return false;
  }
}
var target = {};
var proxy = new Proxy(target, handler);
proxy.foo = 'bar';
console.log(proxy);

var handler = {
  getOwnPropertyDescriptor (target, key) {
    if (key[0] === '_') {
      return;
    }
    return Object.getOwnPropertyDescriptor(target, key);
  }
}

var target = {_foo:'bar',baz:'tar'};
var proxy = new Proxy(target, handler);
console.log(Object.getOwnPropertyDescriptor(proxy, 'wat'));
console.log(Object.getOwnPropertyDescriptor(proxy, '_foo'));
console.log(Object.getOwnPropertyDescriptor(proxy, 'baz'));

var proto = {};
var p = new Proxy({}, {
  getPrototypeOf(target) {
    return proto;
  }
})

var p = new Proxy({}, {
  isExtensible: function (target) {
    console.log('called');
    return true;
  }
})

console.log(Object.isExtensible(p));

var target = {
  a: 1,
  b: 2,
  c: 3
}
var handler = {
  ownKeys(target) {
    return ['a'];
  }
}
var proxy = new Proxy(target, handler);
console.log(Object.keys(proxy));

var target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}

var handler = {
  ownKeys (target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_');
  }
}
var proxy = new Proxy(target, handler);
for (let key of Object.keys(proxy)) {
  console.log(target[key]);
}

console.log('assign' in Object);
console.log(Reflect.has(Object, 'assign'));




