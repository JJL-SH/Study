var Model = function (sex, underware) {
  this.sex = sex;
}

Model.prototype.takePhoto = function () {
  console.log('sex=' + this.sex + ' underware=' + this.underware);

}

var male = new Model('male');
var female = new Model('female');

for (var i = 1;i <= 50; i++) {
  male.underware = 'underware' + i;
  male.takePhoto();
}
for (var j = 1;j <= 50; j++) {
  female.underware = 'underware' + j;
  female.takePhoto()
}