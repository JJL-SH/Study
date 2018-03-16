let uid = Symbol.for('uid')
let object = {}

object[uid]= '12345'

console.log(object[uid])
console.log(object)

let uid2 = Symbol.for('uid')

console.log(uid === uid2)

console.log(object[uid2])

console.log(uid2)