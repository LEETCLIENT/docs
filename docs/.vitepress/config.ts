import { defineConfig } from 'vitepress'
import fs from 'node:fs'

const base = `${__dirname}/..`

export default defineConfig({
  lang: 'ru-RU',
  title: "Leet Solutions",
  description: "Leet Client - документация",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Script API', link: '/scripts' },
      { text: 'Модули', link: 'modules' }
    ],

    sidebar: [
      {
        text: 'Script API',
        base: '/scripts',
        items: [
          { text: 'Гайд', link: '/' },
          { text: 'register', link: '/function/register' },
          {
            text: 'Ивенты (Events)', base: '/scripts/events', items: [
              ...fs.readdirSync(`${base}/scripts/events`).filter(it => it !== "index.md").map(it => {
                const name = it.replace(".md", "")
                return { text: name, link: `/${name}` }
              })
            ]
          },
          {
            text: 'Классы', base: '/scripts/class', items: [
              ...fs.readdirSync(`${base}/scripts/class`).map(it => {
                const name = it.replace(".md", "")
                return { text: name, link: `/${name}` }
              })
            ]
          },
          {
            text: 'Провайдеры (глобали)', base: '/scripts/provider', items: [
              ...fs.readdirSync(`${base}/scripts/provider`).map(it => {
                const name = it.replace(".md", "")
                return { text: name, link: `/${name}` }
              })
            ]
          }
        ],
      },
      {
        text: 'Модули',
        base: '/modules',
        items: [
          {
            text: 'Combat', items: [
              { text: 'Aura', link: '/Aura' }
            ]
          }
        ]
      },
      {
        text: 'Остальное',
        base: '/other',
        items: [
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/LEETCLIENT/docs' }
    ]
  }
})
