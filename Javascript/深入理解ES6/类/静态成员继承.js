class Rectangle{
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  static create(length, width) {
    return new Rectangle(length, length);
  }
  getArea(){
    return this.length * this.width;
  }
}

class Square extends Rectangle{
  constructor(length) {
    super(length, length);
  }
}

var rect = Square.create(3, 4);
console.log(rect instanceof Rectangle)
console.log(rect.getArea())
console.log(rect instanceof Square)