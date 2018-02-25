var makeSound = function(animal) {
  // animal 是否是 Duck 类的一个实例
  if (animal instanceof Duck) {
    console.log('嘎嘎嘎');
  } else if (animal instanceof Chicken) {
    console.log('咯咯咯');
  }
}

var Duck = function(){};
var Chicken = function(){};

makeSound(new Duck());
makeSound(new Chicken())