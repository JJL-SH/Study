<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
<script type="text/javascript">
  var cache = [];

  var miniConsole = {
    log: function () {
      var args = arguments;
      cache.push(function () {
        return miniConsole.log.apply(miniConsole, args);
      })
    }
  }
  var handler = function (event) {
    if (event.keyCode === 113) {
      
    }
  }
</script>