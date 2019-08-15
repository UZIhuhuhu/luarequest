const Koa = require('koa');
const koaBody = require('koa-body');
const mongo = require('koa-mongo');

const app = new Koa();
app.use(
  mongo({
    host: 'localhost',
    port: 27017,
    user: 'root',
    pass: '123456',
    db: 'tiny',
    authSource: 'admin',
    max: 100,
    min: 1
  })
);
app.use(koaBody());
app.use(async ctx => {
  ctx.set('Content-Type', 'application/json');
  const data = await ctx.db
    .collection('api')
    .find()
    .toArray();
  ctx.body = data;
});

app.listen(4444);
