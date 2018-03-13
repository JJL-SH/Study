// var order = function (orderType, pay, stock) {
//   if (orderType === 1) {
//     if (pay === true) {
//       console.log('500元定金预购，得到100元优惠券');
//     } else {
//       if (stock > 0) {
//         console.log('普通购买，无优惠券')
//       } else {
//         console.log('手机库存不足')
//       }
//     }
//   } else if (orderType === 2) {
//     if (pay === true) {
//       console.log('200元定金预购，得到50元优惠券')
//     } else {
//       if (stock > 0) {
//         console.log('普通购买，无优惠券')
//       } else {
//         console.log('手机库存不足')
//       }
//     }
//   } else if (orderType === 3) {
//     if (stock > 0) {
//       console.log('普通购买，无优惠券')
//     } else {
//       console.log('手机库存不足')
//     }
//   }
// }

// order(1, true, 500)



var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay) {
    console.log('500元定金预购，得到100元优惠券');
  } else {
    return 'nextSuccessor'
  }
}
var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay) {
      console.log('200元定金预购，得到50元优惠券')
  } else {
    return 'nextSuccessor'
  }
}
var order = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机库存不足')
  }
}


var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
}
Chain.prototype.setNextSuccessor = function(successor){
  return this.successor = successor;
};
Chain.prototype.passRequest = function(){
  var ret = this.fn.apply(this, arguments)
  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
  return ret;
};


var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrder = new Chain(order)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrder)

chainOrder500.passRequest(1, true, 500)



Function.prototype.after = function (fn) {
  var self = this
  return function () {
    var ret = self.apply(this, arguments)
    console.log(self)
    if(ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }
    return ret
  }
}

var test = order500.after(order200).after(order)

test(2, true, 500)


