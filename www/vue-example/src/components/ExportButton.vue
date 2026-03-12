<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import domToVectorPdf from 'dom-to-vector-pdf'
import fontTTF from '@/assets/LXGWHeartSerifCHS-2.ttf'

const loadingVector = ref(false)

async function handleVectorExport() {
  loadingVector.value = true
  ElMessage.info('Generating PDF (dom-to-vector-pdf)...')
  try {
    domToVectorPdf.registerFont([{
      font: fontTTF,
      fontWeight: '400',
      fontStyle: 'normal',
    }, {
      font: fontTTF,
      fontWeight: '500',
      fontStyle: 'normal',
    },
    {
      font: fontTTF,
      fontWeight: '600',
      fontStyle: 'normal',
    }, {
      font: fontTTF,
      fontWeight: '700',
      fontStyle: 'normal',
    },
    ])
    await domToVectorPdf.exportPDF({
      selector: '.app-main',
      filename: 'export-vector',
    })
    ElMessage.success('Vector PDF exported!')
  } catch (e) {
    console.error('Vector export failed:', e)
    ElMessage.error('Vector PDF export failed.')
  } finally {
    loadingVector.value = false
  }
}
</script>

<template>
  <div class="export-group">
    <button class="export-fab" :disabled="loadingVector" @click="handleVectorExport">
      <span v-if="loadingVector" class="spinner" />
      <span v-else class="export-icon">&#8681;</span>
      <span>{{ loadingVector ? 'Exporting...' : 'dom-to-vector-pdf' }}</span>
    </button>
  </div>
</template>

<style scoped>
.export-group {
  position: fixed;
  top: 72px;
  right: 24px;
  display: flex;
  gap: 10px;
  z-index: 9999;
}

.export-fab {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 3px 12px rgba(64, 158, 255, 0.4);
  transition: all 0.2s;
}

.export-fab:hover:not(:disabled) {
  background: #337ecc;
  box-shadow: 0 4px 16px rgba(64, 158, 255, 0.5);
  transform: translateY(-1px);
}

.export-fab:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.export-icon {
  font-size: 14px;
  line-height: 1;
}

.spinner {
  width: 12px;
  height: 12px;
  border: 2px solid #ffffff66;
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
