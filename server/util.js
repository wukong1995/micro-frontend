const colors = require('colors/safe')

const fs = require('fs')
const path = require('path')

// 如果未传配置文件，读取本地配置文件

let confPath
if (process.env.npm_config_conf) {
  confPath = process.env.npm_config_conf
} else if (process.env.NODE_ENV === 'production') {
  confPath = '../config/conf.qa.conf'
} else {
  confPath = '../config/conf.dev.conf'
}
console.log(colors.green(`==> 使用 ${confPath}`))

// 读取配置模板
let confTemplateFormat
try {
  const file = path.relative(__dirname, confPath)
  confPath = path.join(__dirname, file)
  const confTemplate = fs.readFileSync(confPath, { encoding: 'utf8' })
  confTemplateFormat = JSON.parse(confTemplate.replace(/\/\*注释\*\/.*/g, ''))
} catch (err) {
  console.log('配置模板格式错误', err)
  throw new Error('renderConf: 配置模版格式错误')
}

// eslint-disable-line no-console
console.log(colors.green('==> 配置文件加载完毕！'))

process.env.MODE = confTemplateFormat.ENV.MODE

module.exports = {
  globalConf: confTemplateFormat
}