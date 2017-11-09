// var makeSound = function (animal) {
//   if (animal instanceof Duck) {
//     console.log('gagaga');
//   } else if (animal instanceof Chicken) {
//     console.log('jijiji');
//   }
// }
// var Duck = function () {}
// var Chicken = function () {}

// makeSound(new Duck());
// makeSound(new Chicken());

var makeSound = function (animal) {
  animal.sound();
}
var Duck = function(){};
Duck.prototype.sound = function () {
  console.log('gagaga');
}
var Chicken = function(){};
Chicken.prototype.sound = function () {
  console.log('jijiji');
}

makeSound(new Duck())
makeSound(new Chicken())




var googleMap = {
  show: function () {
    console.log('开始渲染谷歌地图');
  }
}
var baiduMap = {
  show: function () {
    console.log('开始渲染百度地图');
  }
}
var renderMap = function (map) {
  if (map.show instanceof Function) {
    map.show();
  }
}
renderMap(googleMap);
renderMap(baiduMap);