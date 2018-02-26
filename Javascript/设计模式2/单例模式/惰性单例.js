Singleton.getInstance = (function () {
  var instance = null;

  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }

    return instance;
  }
})()