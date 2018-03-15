let person = {
  getGreeting(){
    return "Hello"
  }
}
let dog = {
  getGreeting(){
    return 'dog'
  }
}
let friend = {
  getGreeting(){
    return super.getGreeting.call(this);
  }
}

Object.setPrototypeOf(friend, person);
console.log(friend.getGreeting())
console.log(Object.getPrototypeOf(friend) === person)