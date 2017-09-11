var http = require('http');
var qs = require('querystring');
var search = process.argv.slice(2).join(' ').trim();

if (!search.length) {
  return console.log('\n Usage: node tweets <search term>\n');
}

console.log('\n searching for: \033[96m' + search + '\033[39m\n');

http.request({
  host: 'https://api.github.com',
  path: '/search/repositories?' + qs.stringify({q: search})
}, function(res) {
  var body = '';

  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    console.log('old data:' + body);
    var obj = JSON.parse(body);
    obj.items.forEach(function(item) {
      console.log('    \033[90m' + item.name + '\033[39m');
      console.log('    \033[94m' + item.full_name + '\033[39m');
      console.log('--');
    })
  })
}).end();