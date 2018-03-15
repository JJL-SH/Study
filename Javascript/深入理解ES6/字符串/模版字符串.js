let count = 10;
let price = 0.25;
let message = passthru`${count} items cost $${(count * price).toFixed(2)}.`

function passthru(argument) {
  console.log(argument)
}
console.log(message)