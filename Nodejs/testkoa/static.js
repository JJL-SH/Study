const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const app = new Koa();

app.use(static(path.join(__dirname, './static')))

app.use(async (ctx) => {
  ctx.body = 'xxx'
})

app.listen(3000)