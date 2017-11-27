// var pet = {
//   words: '...',
//   speak: function () {
//     console.log(this.words);
//     console.log(this === pet);
//   }
// }
// pet.speak();

// function pet(txt) {
//   this.words = txt;
//   console.log(this.words);
//   console.log(this);
// }
// pet('...')

function pet(words) {
  this.words = words;
  this.speak = function() {
    console.log(this.words);
    console.log(this === cat);
  }
}
var cat = new pet('Miao');
cat.speak();