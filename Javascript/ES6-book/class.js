function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1, 2);

console.log(p.toString());


class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var p2 = new Point2(1, 2);
console.log(p2.toString());
