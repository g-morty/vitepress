import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/vitepress/",
  title: "chrome",
  description: "chrome浏览器插件开发中文指南",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  lang: "zh-CN",
  themeConfig: {
    i18nRouting: true,
    siteTitle: 'chrome plugs',
    nav: [
      { text: "Manifest V3", link: '/synopsis' },
    ],
    sidebar: [
      {
        text: '简介',
        link: '/synopsis'
      },
      { text: '快速开始', link: '/quickStart' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '欢迎联系作者',
      copyright: 'g_morty@qq.com'
    }
  }
})

