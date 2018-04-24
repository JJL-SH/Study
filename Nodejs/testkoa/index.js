const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const loggerGenerator = require('./middleware/logger-async');

router.get('/', async (ctx) => {
  ctx.body = `
    <ul>
      <li><a href="/hello">Hello</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  `;
}).get('/hello', async (ctx) => {
  ctx.body = 'hello';
}).get('/about', async (ctx) => {
  ctx.body = 'about';
})

app.use(loggerGenerator())
app.use(router.routes(), router.allowedMethods());

app.listen(3000)