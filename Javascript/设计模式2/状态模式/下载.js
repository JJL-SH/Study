var State = function(){}
State.prototype.download = function(){
  throw new Error('该方法必须被重载')
};
State.prototype.pause = function(){
  throw new Error('该方法必须被重载')
};
State.prototype.fail = function(){
  throw new Error('该方法必须被重载')
};
State.prototype.finish = function(){
  throw new Error('该方法必须被重载')
};

var ReadyState = function (oDownload) {
  State.apply(this)
  this.oDownload = oDownload;
}
ReadyState.prototype = new State();
ReadyState.prototype.download = function () {
  this.oDownload.setState(this.oDownload.getDownloadingState())
  console.log('Start Download')
}
ReadyState.prototype.pause = function () {
    throw new Error("还没开始下载，不能暂停!");
};

ReadyState.prototype.fail = function () {
    throw new Error("文件还没开始下载，怎么能说失败呢!");
};

ReadyState.prototype.finish = function () {
    throw new Error("文件还没开始下载，当然也不能结束了!");
};