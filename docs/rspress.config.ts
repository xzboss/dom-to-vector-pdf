import * as fs from 'node:fs';
import * as path from 'node:path';
import type { RspressPlugin } from '@rspress/core';
import { defineConfig } from '@rspress/core';

const buildDir = path.join(__dirname, '..', 'build');

const redirectRootToDocsPlugin = (): RspressPlugin => ({
  name: 'redirect-root-to-docs',
  afterBuild() {
    const indexPath = path.join(buildDir, 'index.html');
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0;url=/docs/">
  <script>location.replace("/docs/");</script>
  <title>Redirecting...</title>
</head>
<body>
  <p>Redirecting to <a href="/docs/">/docs/</a>...</p>
</body>
</html>`;
    fs.mkdirSync(buildDir, { recursive: true });
    fs.writeFileSync(indexPath, html, 'utf-8');
  },
});

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  outDir: path.join(buildDir, 'docs'),
  base: '/docs/',
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
  plugins: [redirectRootToDocsPlugin()],
});
