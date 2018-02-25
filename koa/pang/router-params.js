const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();


router.get('/', async (ctx) => {
  ctx.body = ctx.query;
})


app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);