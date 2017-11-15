var setCommand = function(button, func){
  button.onclick = func;
}
var MenuBar = {
  refresh: function () {
    console.log('refresh menu');
  }
}
var RefreshMenuBarCommand = function(receiver){
  return function(){
    receiver.refresh();
  }
}
var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar);
setCommand(button, refreshMenuBarCommand);