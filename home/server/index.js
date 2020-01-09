const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const colors = require('colors');
const path = require('path');
const cors = require('@koa/cors');
const { globalConf } = require('./util');

console.log(globalConf.ENV.MODE)

app
  .use(cors({ origin: '*'}))
  .use(serve(path.join(__dirname, '../static')))
  .listen(9001);

console.log(colors.green('==>服务在9001端口上启动'))
