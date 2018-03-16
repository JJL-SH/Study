let node = {
  type: '0',
  name: '00'
}
let type = 1;
let name = 11;
({type, name} = node)

console.log(name)

function outputInfo(value) {
  console.log(value === node)
}
outputInfo({type, name} = node)

console.log(type, name)