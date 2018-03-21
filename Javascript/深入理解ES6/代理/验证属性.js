let target = {
  name: 'target'
}
let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError('属性必须是数字')
      }
    }

    return Reflect.set(trapTarget, key, value, receiver);
  }
})

proxy.count = 1;
console.log(proxy.count)
console.log(target.count)

proxy.name = 'proxy'
console.log(proxy.count)
console.log(target.count)

proxy.anotherName = 'proxy'
console.log(proxy.count)
console.log(target.count)