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