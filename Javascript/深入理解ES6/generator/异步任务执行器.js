function run(taskDef) {
  let task = taskDef()
  let ret = task.next()

  function step() {
    if(!ret.done) {
      ret = task.next()
      step()
    }
  }
  step()
}

run(function *() {
  console.log(1)
  yield
  console.log(2)
  yield
  console.log(3)
})