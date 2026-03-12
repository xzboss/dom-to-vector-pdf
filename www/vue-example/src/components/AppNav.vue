<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { path: 'css-properties', label: 'CSS Properties', icon: '🎨' },
  { path: 'components', label: 'Components', icon: '🧩' },
  { path: 'chinese', label: '中文示例', icon: '📄' },
]
</script>

<template>
  <nav class="app-nav">
    <div class="nav-section-title">Pages</div>
    <router-link
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="nav-item"
      :class="{ active: route.path === item.path }"
    >
      <span class="nav-icon">{{ item.icon }}</span>
      <span class="nav-label">{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<style scoped>
.app-nav {
  width: 220px;
  background: #fff;
  border-right: 1px solid #e4e7ed;
  padding: 16px 0;
  flex-shrink: 0;
}

.nav-section-title {
  padding: 8px 20px;
  font-size: 12px;
  font-weight: 600;
  color: #909399;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  color: #303133;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.15s;
}

.nav-item:hover {
  background: #f5f7fa;
}

.nav-item.active {
  background: #ecf5ff;
  color: #409eff;
  font-weight: 500;
  border-right: 3px solid #409eff;
}

.nav-icon {
  font-size: 16px;
}
</style>
