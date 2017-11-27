var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
  content: '老师超级帅',
  mid: 8837
})
var options = {
  hostname: 'www.imooc.com',
  post: 80,
  path: '/course/docomment',
  method: 'POST',
  headers: {
    'Accept':'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding':'gzip, deflate, br',
    'Accept-Language':'zh-CN,zh;q=0.9',
    'Connection':'keep-alive',
    'Content-Length':postData.length,
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie':'PHPSESSID=kijre7gb9m4q9p432s94m010v4; imooc_uuid=71a1daff-a2f3-4103-8948-41964ec40b17; imooc_isnew=1; imooc_isnew_ct=1511763558; loginstate=1; apsid=NmZDE3MzFkOWExMWE3Y2U0YTM2OGY4YWU3YWQ2NjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjc0NzU3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1NjU5Mjc2NTZAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGUwMzdmYTUyMmQwOTYwZWQ0MGI1MjZjNTY4N2ExNTg5c64bWnOuG1o%3DYm; last_login_username=565927656%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1511763559,1511764733; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1511764736; cvde=5a1bae660b260-49',
    'Host':'www.imooc.com',
    'Origin':'https://www.imooc.com',
    'Referer':'https://www.imooc.com/video/8837',
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
    'X-Requested-With':'XMLHttpRequest'
  }
}

var req = http.request(options, function (res) {
  console.log('Status:'+res.statusCode);
  console.log('Headers:'+JSON.stringify(res.headers));

  res.on('data', function (chunk) {
    console.log(Buffer.isBuffer(chunk));
    console.log(typeof chunk);
  })
  res.on('end', function () {
    console.log('评论完毕');
  })
})
req.on('error', function (error) {
  console.log('Error:'+error.message);
})
req.write(postData);
req.end()