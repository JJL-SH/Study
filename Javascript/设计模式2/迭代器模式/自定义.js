var each = function (ary, callback) {
  for (var i = 0;i< ary.length; i++) {
    callback.call(ary[i], i, ary[i]);
  }
}

each([1,2,3], function (i, n) {
  console.log(i,n)
})