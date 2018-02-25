var cost = (function(){
  var args = [];

  return function () {
    if (arguments.length) {
      [].push.apply(args, arguments);
    } else {
      var money = 0;
      for (var i=0,moneys;moneys=args[i++];){
        money += moneys;
      }
      return money;
    }
  }
})()


cost(100)
cost(200)
cost(300)

console.log(cost())
