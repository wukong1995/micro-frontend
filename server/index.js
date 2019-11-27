const Koa = require('koa');
const app = new Koa();
const { globalConf } = require('./util')

console.log(globalConf.ENV.MODE)

// response
app.use(ctx => {
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
  
  <script type="systemjs-importmap" src="http://localhost:8080/dist/importmap.json"></script>
  <script src='https://unpkg.com/systemjs@3.1.2/dist/system.js'></script>
  <script src='https://unpkg.com/systemjs@3.1.2/dist/extras/amd.js'></script>
  <script src='https://unpkg.com/systemjs@3.1.2/dist/extras/named-exports.js'></script>
  <script src="http://localhost:8080/dist/config.js"></script>
</body>
</html>`;
});

app.listen(8000);
