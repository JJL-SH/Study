let set = new Set();
let key1 = {}
let key2 = {}

set.add(5)
set.add("5")
set.add(key1)
set.add(key2)

console.log(set.size)
console.log(set)

console.log(set.has(5))

set.forEach((a,b,c) => {
  console.log(a,b,c)
})