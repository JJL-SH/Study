let lastName = 'last name'
let person = {
  "first name": 'bob',
  [lastName]: 'liu'
}

console.log(person['first name'])
console.log(person[lastName])


console.log(+0 == -0)
console.log(+0 === -0)
console.log(Object.is(+0, -0))
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(Object.is(NaN, NaN))
console.log(5 == 5)
console.log(5 == '5')
console.log(5 === 5)
console.log(5 === '5')
console.log(Object.is(5, 5))
console.log(Object.is(5, '5'))
