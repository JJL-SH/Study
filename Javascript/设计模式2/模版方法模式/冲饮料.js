var Beverage = function () {
  // body...
}
Beverage.prototype.boilWater = function () {
  console.log('把水煮开');
}
Beverage.prototype.brew = function(){
  // body... 
};
Beverage.prototype.pourInCup = function(){
  // body... 
};
Beverage.prototype.addCondiments = function(){
  // body... 
};
Beverage.prototype.init = function () {
  this.boilWater()
  this.brew()
  this.pourInCup()
  this.addCondiments()
}



var Coffee = function () {
  // body...
}
Coffee.prototype = new Beverage()