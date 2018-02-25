var xw = (function (argument) {
  var xwj = function (message) {
    this.menling = message;
  }
  var men;
  var info = {
    sendMessage: function(message){
      if (!men) {
        men = new xwj(message)
      }
      return men;
    }
  }
  return info;
})()

var xl = {
  callXW: function (msg) {
    var _xw = xw.sendMessage(msg);
    console.log(_xw.menling)
    _xw = null;
  }
}

xl.callXW('didi')