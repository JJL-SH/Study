var Beverage = function () {

}
Beverage.prototype.boilWater = function () {
  console.log('把水煮开');
}
Beverage.prototype.brew = function () {

}
Beverage.prototype.pourInCup = function () {

}
Beverage.prototype.addCondiments = function () {

}
Beverage.prototype.customerWantsCoundiments = function () {
  return true;
}
Beverage.prototype.init = function () {
  this.boilWater();
  this.brew();
  this.pourInCup();
  if (this.customerWantsCoundiments()) {
    this.addCondiments();
  }
}

var Coffee = function() {

}
Coffee.prototype = new Beverage();
Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments = function () {
  console.log('加糖和牛奶');
}
Coffee.prototype.customerWantsCoundiments = function () {
  return window.confirm('请问需要调料么？')
}
var coffee = new Coffee();
coffee.init()
var Tea = function () {

}
Tea.prototype = new Beverage();