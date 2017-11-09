// var Flower = function () {
//   // body...
// }
// var xiaoming = {
//   sendFlower: function (target) {
//     var flower = new Flower();
//     target.receiverFlower(flower);
//   }
// }
// var A = {
//   receiverFlower: function (flower) {
//     console.log('收到花' + flower);
//   }
// }
// xiaoming.sendFlower(A)

var Flower = function () {
  // body...
}

var xiaoming = {
  sendFlower: function (target) {
    target.receiverFlower();
  }
}

var B = {
  receiverFlower: function () {
    A.listenGoodMood(function(){
      var flower = new Flower();
      A.receiverFlower(flower);
    })
  }
}
var A = {
  receiverFlower: function (flower) {
    console.log('get flower' + flower);
  },
  listenGoodMood: function (fn) {
    setTimeout(fn, 2000)
  }
}

xiaoming.sendFlower(B)