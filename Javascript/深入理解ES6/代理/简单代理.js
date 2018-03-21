let target = {}
let proxy = new Proxy(target, {})

proxy.name = "proxy"
console.log(proxy.name)
console.log(target.name)

target.name = 'target'
console.log(proxy.name)
console.log(target.name)