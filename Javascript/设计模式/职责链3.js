var Chain = function (fn) {
  this.fn = fn;
  this.successor = null;
}
Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor;
}
Chain.prototype.passRequest = function () {
  var ret = this.fn.apply(this, arguments);

  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments);
  }
  return ret;
}
Chain.prototype.next = function () {
  return this.successor && this.successor.passRequest.apply(this.successor, arguments)
}


Function.prototype.after = function (fn) {
  var self = this;

  return function () {
    var ret = self.apply(this, arguments);
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments);
    }
    return ret;
  }
}
