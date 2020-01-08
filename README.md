### 微前端探索

基于single-spa

### 功能点

- [x] 支持每个子项目单独开发
- [x] 支持配置模板读取
- [x] 子项目的通信，参考[single-spa-portal-example](https://github.com/me-12/single-spa-portal-example)
- [ ] 每个子项目增加server，具有的功能：配置文件读取；通知/被发现更新；设置静态文件路径
- [ ] 目前的server迁移至portal中，具有的功能：配置文件读取；被通知/发现更新；代理转发静态文件路径
- [x] ~~文件增加hash串之后，如何通知主项目更新~~转移至上面的【通知/被发现更新】问题
