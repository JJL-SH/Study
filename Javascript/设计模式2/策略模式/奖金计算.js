// performance 性能
// calculate 计算
// salary 薪水
// strategy 策略
// bonus 奖金

var performanceS = function () {}
performanceS.prototype.calculate = function (salary) {
  return salary * 4;
}
var performanceA = function () {}
performanceA.prototype.calculate = function (salary) {
  return salary * 3;
}
var performanceB = function () {}
performanceB.prototype.calculate = function (salary) {
  return salary * 2;
}


var Bonus = function () {
  this.salary = null;
  this.strategy = null;
}
Bonus.prototype.setSalary = function (salary) {
  this.salary = salary;
}
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
}
Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary);
}

var test = new Bonus();

test.setSalary(10000);
test.setStrategy(new performanceB());
console.log(test.getBonus())