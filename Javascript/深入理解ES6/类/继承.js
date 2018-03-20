class Rectangle{
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea(){
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(length){
    super(length, length)
  }
  getTest(){
    console.log(this)
  }
}

var square = new Square(3);

console.log(square.getArea())
square.getTest()