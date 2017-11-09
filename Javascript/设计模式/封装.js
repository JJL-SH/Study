var myObject = (function(){
  var _name = 'sven';

  return {
    getName: function () {
      return _name;
    }
  }
})();
console.log(myObject.getName());
console.log(myObject._name);