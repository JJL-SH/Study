const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router({prefix:'/xxx'});
const bodyParser = require('koa-bodyparser');

function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = '';
      ctx.req.on('data', (data) => {
        postdata += data;
      })
      ctx.req.addListener('end', () => {
        resolve(postdata);
      })
    } catch(err){
      reject(err);
    }
  })
}
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);

  for (let [index, queryStr] of queryStrList.entries()){
    let itemList = queryStr.split('=');
    console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }

  return queryData
}

router.get('/', (ctx, next) => {
  ctx.body = 'test';
})
// app.use(bodyParser());
// app.use(async (ctx) => {
//   // let url = ctx.url;
//   // let request = ctx.request;
//   // let req_query = request.query;
//   // let req_querystring = request.querystring;

//   // let ctx_query = ctx.query;
//   // let ctx_querystring = ctx.querystring;

//   // ctx.body = {
//   //   url,
//   //   req_query,
//   //   req_querystring,
//   //   ctx_query,
//   //   ctx_querystring
//   // }

//   if (ctx.url === '/' && ctx.method === 'GET') {
//     let html = `
//       <h1>Koa2 request post demo</h1>
//       <form action="/" method="POST">
//         <p>UserName</p>
//         <input type="text" name="username"/>
//         <p>age</p>
//         <input type="text" name="age"/>
//         <p>website</p>
//         <input type="text" name="website" />
//         <button type="submit">submit</button>
//       </form>
//     `

//     ctx.body = html;
//   } else if (ctx.url === '/' && ctx.method === 'POST') {
//     let postData = ctx.request.body;
//     ctx.body = postData;
//   } else {
//     ctx.body = '<h1>404</h1>'
//   }
// })

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000)