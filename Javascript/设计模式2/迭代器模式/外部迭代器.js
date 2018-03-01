var Iterator = function (obj) {
  var current = 0;

  var next = function () {
    current += 1;
  }

  var isDone = function () {
    return current >= obj.length;
  }
  var getCurrItem = function () {
    return obj[current];
  }
  return {
    next:next,
    isDone: isDone,
    getCurrItem: getCurrItem,
    length: obj.length
  }
}

var compare = function (iterator1, iterator2) {
  console.log(iterator1,iterator2)
  if (iterator1.length !== iterator2.length) {
    console.log('数据不想等')
  }
  while(!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      throw new Error('数据不想等');
    }
    iterator1.next();
    iterator2.next();
  }

  console.log('数据相等')
}
var a = Iterator([1,2,3]);
var b = Iterator([1,2,3]);
compare(a,b)