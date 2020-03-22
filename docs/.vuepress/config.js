const themeConfig = require('./config/index')
const plugins = require('./config/plugin')

console.log(JSON.stringify(themeConfig))
module.exports = {
  base: '/blog/',
  title: 'TJ',
  description: 'Just playing around',
  themeConfig,
  plugins,
  lastUpdated: '上次更新'
}