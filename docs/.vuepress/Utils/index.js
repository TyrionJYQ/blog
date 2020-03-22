const path = require('path')
const fs = require('fs')
const Utils = Object.create(null)

Utils.getSideBarChildren = dirpath => fs.readdirSync(dirpath).map(dir => dir.replace('.md', '')).filter(name => name !== 'README').concat('')

























module.exports = Utils