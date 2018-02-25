const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

let home = new Router();
home.get('/home', async (ctx) => {
  ctx.body = 'home';
}).get('/todo', async (ctx) => {
  ctx.body = 'todo';
})

let page = new Router();
page.get('/page', async (ctx) => {
  ctx.body = 'page'
}).get('/todo', async (ctx) => {
  ctx.body = 'todo';
})

let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);