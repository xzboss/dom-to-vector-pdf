<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <div class="app-body">
      <AppNav />
      <div class="main-wrapper">
        <div class="export-zone-label">Export Area</div>
        <main class="app-main">
          <router-view />
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.app-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.main-wrapper {
  flex: 1;
  position: relative;
  padding: 16px;
  background: #ebeef5;
  overflow-y: auto;
}

.export-zone-label {
  position: absolute;
  top: 4px;
  left: 16px;
  font-size: 11px;
  font-weight: 600;
  color: #909399;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 1;
}

.app-main {
  border: 2px dashed #c0c4cc;
  border-radius: 8px;
  padding: 24px;
  min-height: 100%;
  background: #f5f7fa;
}
</style>
