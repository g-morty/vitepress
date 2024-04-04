import { defineConfig } from 'vitepress'
import router from "./router"

export default defineConfig({
  base: "/vitepress/",
  title: "notes",
  description: "morty私人笔记",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  lang: "zh-CN",
  themeConfig: {
    i18nRouting: true,
    siteTitle: 'home',
    nav: [
      { text: "Manifest V3", link: '/synopsis' },
    ],
    sidebar: router,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/g-morty/vitepress' }
    ],
    footer: {
      message: '欢迎联系作者',
      copyright: 'g_morty@qq.com'
    }
  }
})

