import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Subvert",
  description: "Generate subtitles, summaries, and chapters from videos in seconds",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/what-is-subvert' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'What is Subvert?', link: '/what-is-subvert' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Enabling HTTPS', link: '/enable-https' },
          { text: 'Options', link: '/options' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aschmelyun/subvert' },
      { icon: 'twitter', link: 'https://twitter.com/aschmelyun' }
    ]
  }
})
