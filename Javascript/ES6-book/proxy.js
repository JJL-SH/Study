var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, reveiver) {
    console.log(`setting ${key}`);
    return Reflect.set(target, key, value, reveiver);
  }
})

obj.count = 1;
++obj.count;

var proxy = new Proxy({}, {
  get: function (target, property) {
    return 35;
  }
})
var obj = Object.create(proxy);
console.log(obj.time);

var handler = {
  get: function (target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return `Hello, ${name}`;
  },
  apply: function (target, thisBinding, args) {
    return args[0];
  },
  construct: function (target, args) {
    return {value: args[1]};
  }
}
var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);
console.log(fproxy(1,2));
console.log(new fproxy(1,2));
console.log(fproxy.prototype === Object.prototype);
console.log(fproxy.foo);

function createArray(...elements) {
  let handler = {
    get: function (target, propKey, receiver) {
      var index = Number(propKey);

      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  }
  let target = [];
  target.push(...elements);

  return new Proxy(target, handler);
}

var arr = createArray('a','b','c');
console.log(arr[-1]);

var dom = new Proxy({}, {
  get(target, property) {
    return function (attrs = {}, ...children) {
      const el = document.createElement(property);

      for (let prop of Object.keys(attrs)) {
        el.setAttribute(prop, attrs[prop]);
      }
      for (let child of children) {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        el.appendChild(child);
      }
      return el;
    }
  }
})