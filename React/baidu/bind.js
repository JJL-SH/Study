var obj = {
  title: 'xxx'
}
function demo() {
  console.log(arguments, 111, this);
  console.log(this.title)
}
demo.call(obj, 1, 2, 3)
var fn = demo.bind(obj, 1, 2, 3)
fn()