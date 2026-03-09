import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'DOM to Vector PDF',
  lang: 'en',
  locales: [
    { lang: 'en', label: 'English' },
    { lang: 'zh-CN', label: '简体中文' },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/xzboss/dom-to-vector-pdf',
      },
    ],
  },
});
