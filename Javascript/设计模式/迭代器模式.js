// 内部迭代器
var each = function (data, callback) {
  for (var i = 0,l = data.length; i < l; i ++) {
    callback.call(data[i], i, data[i]);
  }
}

each([1,2,3], function (index, value) {
  console.log(index, value);
})

var compare1 = function (ary1, ary2) {
  if (ary1.length !== ary2.length) {
    throw new Error('ary1和ary2不相等');
  }
  each(ary1, function (index, value) {
    if (value !== ary2[index]) {
      throw new Error('ary1和ary2不相等');
    }
  });
  console.log('ary1和ary2相等');
}

// compare1([2,3], [2,3])

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
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem,
    length: obj.length
  }
}
var compare2 = function (iterator1, iterator2) {
  if (iterator1.length !== iterator2.length) {
    console.log('NO');
  }
  while(!iterator1.isDone() && !iterator2.isDone()) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      throw new Error('NO');
    }
    iterator1.next();
    iterator2.next();
  }
  console.log('YES');
}
var iterator1 = Iterator([1,2,3]);
var iterator2 = Iterator([1,2,3,4]);
compare2(iterator1, iterator2)