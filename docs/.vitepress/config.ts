import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Leet",
  description: "Leet - docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          { text: 'Ивенты (Events)', link: '/events' },
          {
            text: 'Классы', base: '/class', items: [
              { text: 'Category', link: '/Category' }
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
