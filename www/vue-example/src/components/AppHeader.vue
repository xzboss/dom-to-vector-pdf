<template>
  <header class="app-header">
    <div class="header-brand">
      <h1 @click="goTO">DOM to Vector PDF</h1>
      <span class="header-badge">Demo</span>
    </div>
    <div class="header-links">
      <a href="https://github.com/xzboss/dom-to-vector-pdf" target="_blank">GitHub</a>
      <a href="https://www.npmjs.com/package/dom-to-vector-pdf" target="_blank">NPM</a>
    </div>
  </header>
</template>

<script setup lang="ts">
const goTO = () => {
  window.open('https://dom-to-vector-pdf.xzboss.cn/docs', '_blank')
}
</script>
<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 24px;
  background: #1d1e20;
  color: #fff;
  flex-shrink: 0;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-brand h1 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.3px;
}

.header-badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  background: #409eff;
  color: #fff;
  font-weight: 500;
}

.header-links {
  display: flex;
  gap: 20px;
}

.header-links a {
  color: #ffffffcc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.header-links a:hover {
  color: #fff;
}
</style>
