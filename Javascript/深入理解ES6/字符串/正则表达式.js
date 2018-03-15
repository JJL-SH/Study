let text = 'hello1 hello2 hello3'
let pattern = /hello\d\s?/
let result = pattern.exec(text)
console.log(result)


let globalPattern = /hello\d\s?/g
let globalResult = globalPattern.exec(text)
console.log(globalResult)

let stickyPattern = /hello\d\s?/y
let stickyResult = stickyPattern.exec(text)
console.log(stickyResult)

pattern.lastIndex = 1;
globalPattern.lastIndex = 1;
stickyPattern.lastIndex = 1;

console.log(result)
console.log(globalResult)
console.log(stickyResult)

