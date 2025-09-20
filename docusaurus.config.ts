import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import math from 'remark-math';
import katex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Docs',
  tagline: 'Docs for preparing technical interviews',
  favicon: 'img/docs.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://goosego0218.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'goosego0218', // Usually your GitHub org/user name.
  projectName: 'goosego0218.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: { defaultLocale: 'en', locales: ['en'] },

  // KaTeX CSS
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  // Velog RSS 플러그인 등록
  // plugins: [
  //   [
  //     'docusaurus-plugin-rss-feeds',
  //     {
  //       feeds: [
  //         {
  //           id: 'velog',
  //           title: 'Velog - goosego',
  //           url: 'https://v2.velog.io/rss/goosego',
  //         },
  //       ],
  //     },
  //   ],
  // ],


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          // docs 전용으로 katex 명시 적용
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false, 
        theme: { customCss: './src/css/custom.css' },

      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/melting-face.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/velog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/goosego0218', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs Intro',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/30725491/seoungwoo-son',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Velog Blog',
              href: 'https://velog.io/@goosego/posts', 
            },
            {
              label: 'GitHub',
              href: 'https://github.com/goosego0218',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
