const path = require('path');
const { getSideBarChildren } = require('../Utils/index');
const { VUE_DIRS } = require('../config/dirs');

module.exports = {
  '/vue/sourcecode/': getVueSidebar({
    dir: VUE_DIRS.sourcecode,
    title: '源码分析',
    sidebarDepth: 2
  }),
  '/vue/vuepress/': getVueSidebar({
    dir: VUE_DIRS.vurepress,
    title: 'vuepress',
    sidebarDepth: 2
  })
};

function getVueSidebar({
  dir,
  title = 'title',
  collapsable = true,
  sidebarDepth
}) {
  return [
    {
      title,
      collapsable,
      children: getSideBarChildren(path.resolve(__dirname, dir)),
      sidebarDepth: 2,
      sidebarDepth
    }
  ];
}
