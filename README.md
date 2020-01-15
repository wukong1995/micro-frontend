### 微前端探索

基于single-spa

### 功能点

- [x] 支持每个子项目单独开发
- [x] 支持配置模板读取
- [x] 子项目的通信，参考[single-spa-portal-example](https://github.com/me-12/single-spa-portal-example)
- [ ] 项目需增加功能：
  - [ ] 每个子项目增加server，具有的功能：~~配置文件读取；~~ 通知/被发现更新；~~设置静态文件路径~~
  - [ ] 目前的server迁移至portal中，具有的功能：~~配置文件读取；~~ 被通知/发现更新；~~代理转发静态文件路径~~
  - [ ] 每个项目webpack打包完后，启动server
  - [x] 每个项目webpack打包后生成assets.json文件
  - [ ] 每个项目打包后的文件增加hash串
  > ps: dev中不增加hash串，importmap.json从配置文件读出，server不做工作
  >     prod中子项目start的时候，首先读取assets.json，将entryfile name更新至redis中
- [x] ~~文件增加hash串之后，如何通知主项目更新~~转移至上面的【通知/被发现更新】问题
- [ ] 多节点部署时，一个子节点挂掉之后，主项目去找其他存活的节点
  > ps: 子项目的server定期更新redis中的key，key消失的时候，可以认为节点死掉了
