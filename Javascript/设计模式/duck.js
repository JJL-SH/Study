// 🦆
var duck = {
  duckSinging: function () {
    console.log('gagaga');
  }
}
// 🐔
var chicken = {
  duckSinging: function () {
    console.log('gagaga');
  }
}
// 合唱团
var choir = [];
var joinChoir = function (animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal);
    console.log('加入成功');
    console.log('成员数量：' + choir.length);
  }
}
joinChoir(duck);
joinChoir(chicken);