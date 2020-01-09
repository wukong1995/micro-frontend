const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const colors = require('colors');
const path = require('path');
const router = require('koa-router')();
const { globalConf } = require('./util');

console.log(globalConf.ENV.MODE)

router.get('/*', ctx => {
  ctx.body = `<html>
<head>
  <!-- Materialize -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
  <div id="navBar"></div>
  <div id="home"></div>
  <div id="list"></div>

  <script type="systemjs-importmap" src="http://localhost:9000/portal-frontend/assets/importmap.json"></script>
  <script src='https://unpkg.com/systemjs@3.1.2/dist/system.js'></script>
  <script src='https://unpkg.com/systemjs@3.1.2/dist/extras/amd.js'></script>
  <script src='https://unpkg.com/systemjs@3.1.2/dist/extras/named-exports.js'></script>
  <script src="http://localhost:9000/portal-frontend/assets/config.js"></script>
</body>
</html>`;
})

app
  .use(serve(path.join(__dirname, '../static')))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(9000);

console.log(colors.green('==>服务在9000端口上启动'))
