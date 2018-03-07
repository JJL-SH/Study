var Folder = function (name) {
  this.name = name;
  this.files = [];
  this.parent = null;
}
Folder.prototype.add = function (file) {
  this.parent = this;
  this.files.push(file)
}
Folder.prototype.scan = function () {
  console.log('开始扫描文件夹：'+this.name)
  for(var i=0,file;file=this.files[i++];){
    file.scan();
  }
}
Folder.prototype.remove = function () {

  if (!this.parent) {
    return;
  }
  for(var files=this.parent.files,l=files.length-1;l>=0;l--) {
    var file = files[l];
    if(file === this) {
      files.splice(l, 1)
    }
  }
}
var File = function (name) {
  this.name = name;
  this.parent = null;
}
File.prototype.add = function () {
  throw new Error('文件下面不能再添加文件')
}
File.prototype.scan = function () {
  console.log('开始扫描文件：'+this.name)
}
File.prototype.remove = function () {
  if (!this.parent) {
    return;
  }
  for(var files=this.parent.files,l=files.length-1;l>=0;l--){
    var file = files[l]
    if(file === this){
      files.splice(l, 1)
    }
  }
}


var folder = new Folder('学习资料')
var folder1 = new Folder('javascript')
var file1 = new File('深入浅出nodejs')

folder1.add(new File('设计模式'))
folder.add(folder1)
folder.add(file1)

folder1.remove()
folder.scan()




