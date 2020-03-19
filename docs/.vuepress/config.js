const {nav} = require('./config/nav')
const {footer} = require('./config/footer')
module.exports = {
  base: '/blog/',
  title: 'Tyrionjyq',
  
  description: 'Just playing around',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    nav,
    footer,
    directories:[
      {
        id: 'sourcecode',
        dirname: '_posts',
        path: '/',
      },
      {
        id: 'sourcecode',
        dirname: 'sourcecode',
        path: '/sourcecode/',
      },
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ['tag'],
        path: '/tag/',
        title: '标签', // Entry, scope and pagination page titles for current classifier
        pagination: {
          getPaginationPageTitle (pageNumber, key) {
            return `第 ${pageNumber} 頁 - ${key} | 標籤`
          }
        },
      },
    ],
    globalPagination: {
      lengthPerPage: 4,
      prevText: '上一页',
      nextText: '下一页'
    },
    /**
     * vuepress-plugin-disqus will use $lang as default
     */
    comment:{
      service: "disqus",
      shortname: "Your blog's shortname",
    },
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    newsletter: {
      endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    }
  
  },
  
}