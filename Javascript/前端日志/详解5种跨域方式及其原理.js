function jsonp_cb(data) {
  console.log(data);
}
function ajax() {
  var url = 'http://xx.com/test.php?jsonp_callback=jsonp_cb';
  var script = document.createElement('script');
  // send require
  script.src = url;
  document.head.appendChild(script);
}
ajax();