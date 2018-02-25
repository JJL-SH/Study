const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  if (ctx.url === '/') {
    ctx.cookies.set('name', 'bob', {
      domain: '127.0.0.1',
      path: '/',
      maxAge: 1000*60*60*24,
      expires: new Date('2018-12-31'),
      httpOnly: false,
      overwrite: false
    });
    ctx.body = 'cookit is set';
  } else {
    ctx.body = 'hello'
  }
})

app.listen(3000);