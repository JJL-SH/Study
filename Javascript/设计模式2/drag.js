(function () {
  var transform = getTransform();
  function getTransform() {
      var transform = '',
          divStyle = document.createElement('div').style,
          transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform'],

          i = 0,
          len = transformArr.length;

      for(; i < len; i++)  {
          if(transformArr[i] in divStyle) {
              return transform = transformArr[i];
          }
      }

      return transform;
  }
  function Drag (target) {
    this.elem = typeof target === 'Object' ? target : document.getElementById(target);

    this.startX = 0;
    this.StartY = 0;

    this.sourceX = 0;
    this.sourceX = 0;

    this.init();
  }
  
  Drag.prototype = {
    constructor: Drag,
    init: function () {
      this.setDrag()
    },
    getStyle: function (property) {
      return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.elem, false)[property] : this.elem.currentStyle[property];
    },
    getPosition: function () {
      var pos = {x:0,y:0};

      if (transform) {
        var transformValue = this.getStyle(transform);
        if(transformValue === 'none') {
          this.elem.style[transform] = 'translate(0, 0)'
        } else {
          var temp = transformValue.match(/-?\d+/g)
          pos={
            x:parseInt(temp[4].trim()),
            y:parseInt(temp[5].trim())
          }
        }
      } else {
        if (this.getStyle('position') == 'static') {
          this.elem.style.position = 'relative';
        } else {
          pos = {
            x: parseInt(this.getStyle('left') ? this.getStyle('left') : 0),
            y: parseInt(this.getStyle('top') ? this.getStyle('top') : 0)
          }
        }
      }
      return pos
    },
    setPosition: function (pos) {
      if (transform) {
        this.elem.style[transform] = `translate(${pos.x}px,${pos.y}px)`
      } else {
        this.elem.style.left = pos.x + 'px'
        this.elem.style.top = pos.y+'px'
      }
    },
    setDrag: function () {
      var self = this;

      self.elem.addEventListener('mousedown', start, false);
      function start(event) {
        self.startX = event.pageX;
        self.startY = event.pageY;

        var pos = self.getPosition();
        self.sourceX = pos.x;
        self.sourceY = pos.y;

        document.addEventListener('mousemove', move, false)
        document.addEventListener('mouseup', end, false)
      }
      function move(event) {
        // 鼠标坐标
        var currentX = event.pageX
        var currentY = event.pageY
        var distanceX = currentX - self.startX;
        var distanceY = currentY - self.startY;
        
        self.setPosition({
          x:(self.sourceX+distanceX).toFixed(),
          y:(self.sourceY+distanceY).toFixed(),
        })
      }
      function end(event) {
        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', end)
      }
    }
  }
  window.Drag = Drag;
})()