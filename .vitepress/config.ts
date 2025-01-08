import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { createFileSystemTypesCache } from '@shikijs/vitepress-twoslash/cache-fs'



export default defineConfig({
  lang: 'en-US',
  title: 'Hono',
  description:
    'Web framework built on Web Standards for Cloudflare Workers, Fastly Compute, Deno, Bun, Vercel, Node.js, and others. Fast, but not only fast.',
  ignoreDeadLinks: true,
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config(md) {
      md.use(groupIconMdPlugin)
    },
    codeTransformers: [
      transformerTwoslash({
        typesCache: createFileSystemTypesCache(),
      }),
    ],
  },
  themeConfig: {
    logo: '/images/logo.svg',
    siteTitle: 'PyIq',
  
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'x', link: 'https://x.com/' },
      { icon: 'telegram', link: 'https://t.me/' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2025 PyIq.',
    },
    nav: [
      { text: 'Docs', link: '/docs/' },

    ],
  },
  head: [
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://hono.dev/images/hono-title.png',
      },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'twitter:domain', content: 'hono.dev' }],
    [
      'meta',
      {
        property: 'twitter:image',
        content: 'https://hono.dev/images/hono-title.png',
      },
    ],
    [
      'meta',
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
  titleTemplate: ':title - Hono',
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          cloudflare: 'logos:cloudflare-workers-icon',
        },
      }),
    ],
  },
})
