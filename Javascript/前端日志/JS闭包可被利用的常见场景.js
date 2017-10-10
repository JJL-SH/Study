/*
* @Author: Bob.Liu
* @Date:   2017-10-09 16:28:15
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-09 17:31:17
*/
var elStyle = {};

function callLater(paramA, paramB, paramC) {
  return function () {
    paramA[paramB] = paramC;
    console.log(elStyle);
  }
}
var funRef = callLater(elStyle, 'display', 'none');
setTimeout(funRef, 1000);


function associateObjWithEvent(obj, methodName) {
  return function (e) {
    e = e || window.event;

    return obj[methodName](e, this);
  }
}
function DhtmlObject(elementId) {
  var el = getElementWith(elementId);
  if (el) {
    el.onclick = associateObjWithEvent(this, 'doOnClick');
    el.onmouseover = associateObjWithEvent(this, 'doOnMouseOver');
    el.onmouseout = associateObjWithEvent(this, 'doOnMouseOut');
  }
}
DhtmlObject.prototype.doOnClick = function (event, element) {
  // body...
}
DhtmlObject.prototype.doOnMouseOver = function (event, element) {
  // body...
}
DhtmlObject.prototype.doOnMouseOut = function (event, element) {
  // body...
}


