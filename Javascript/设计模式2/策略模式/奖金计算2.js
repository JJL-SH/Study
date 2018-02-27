var strategies = {
  "S": function (salary) {
    return salary * 4;
  },
  "A": function (salary) {
    return salary * 3;
  },
  "B": function (salary) {
    return salary * 2;
  }
}

var calculateBonus = function (level, strategy) {
  return strategies[level](strategy);
}

console.log(calculateBonus('B', 10000));