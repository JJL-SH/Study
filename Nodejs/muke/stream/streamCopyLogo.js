var fs = require('fs');
var source = fs.readFileSync('../logo.png');

fs.writeFileSync('./streamCopyLogo.png', source)