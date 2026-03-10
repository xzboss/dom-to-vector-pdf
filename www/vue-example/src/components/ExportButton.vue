<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import domToVectorPdf from 'dom-to-vector-pdf'
import dompdf from 'dompdf.js'

const loadingVector = ref(false)
const loadingDompdf = ref(false)

async function handleVectorExport() {
  loadingVector.value = true
  ElMessage.info('Generating PDF (dom-to-vector-pdf)...')
  try {
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

async function handleDompdfExport() {
  const el = document.querySelector('.app-main') as HTMLElement
  if (!el) {
    ElMessage.error('Export target not found.')
    return
  }
  loadingDompdf.value = true
  ElMessage.info('Generating PDF (dompdf.js)...')
  try {
    const blob = await dompdf(el, { useCORS: true })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'export-dompdf.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    ElMessage.success('dompdf.js PDF exported!')
  } catch (e) {
    console.error('dompdf.js export failed:', e)
    ElMessage.error('dompdf.js export failed.')
  } finally {
    loadingDompdf.value = false
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
    <button class="export-fab" :disabled="loadingDompdf" @click="handleDompdfExport">
      <span v-if="loadingDompdf" class="spinner" />
      <span v-else class="export-icon">&#8681;</span>
      <span>{{ loadingDompdf ? 'Exporting...' : 'dompdf.js' }}</span>
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
