<script setup lang="ts">
</script>

<template>
  <div class="chinese-page">
    <h2 class="page-title">中文示例页</h2>
    <p class="page-desc">本页面用于展示中文内容在导出 PDF 时的渲染效果，可与英文页面对比。</p>

    <div class="content-section">
      <el-card shadow="hover" class="intro-card">
        <template #header>
          <span style="font-weight: 600;">关于本项目</span>
        </template>
        <p>这是一个将 DOM 元素转换为矢量 PDF 的示例应用。您可以在右侧点击导出按钮，将当前主内容区域导出为 PDF 文件。</p>
        <p>支持多种 CSS 属性与第三方组件（如 Element Plus）的渲染，便于测试与演示。</p>
      </el-card>

      <el-card shadow="hover" class="intro-card">
        <template #header>
          <span style="font-weight: 600;">功能说明</span>
        </template>
        <ul class="feature-list">
          <li>支持选中区域（主内容区）导出为 PDF</li>
          <li>支持自定义字体注册</li>
          <li>支持导出前、导出后的生命周期钩子</li>
          <li>可与其他 PDF 方案（如 dompdf.js）对比效果</li>
        </ul>
      </el-card>
    </div>

    <div class="stats-row">
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #409eff;">示例</div>
        <div class="stat-label">CSS 属性</div>
      </el-card>
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #67c23a;">组件</div>
        <div class="stat-label">Element Plus</div>
      </el-card>
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #e6a23c;">中文</div>
        <div class="stat-label">本页</div>
      </el-card>
    </div>

    <div class="content-section">
      <el-alert
        title="提示：导出时请确保目标区域（带虚线边框的主内容区）内已加载完成，图片等资源会等待加载后再转换。"
        type="info"
        :closable="false"
        show-icon
      />
    </div>
  </div>
</template>

<style scoped>
.chinese-page {
  max-width: 900px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #1d1e20;
  margin-bottom: 6px;
}

.page-desc {
  color: #606266;
  font-size: 14px;
  margin-bottom: 24px;
}

.content-section {
  margin-bottom: 20px;
}

.intro-card {
  margin-bottom: 16px;
}

.intro-card p {
  margin: 0 0 12px 0;
  line-height: 1.6;
  color: #303133;
}

.intro-card p:last-child {
  margin-bottom: 0;
}

.feature-list {
  margin: 0;
  padding-left: 20px;
  color: #303133;
  line-height: 1.8;
}

.stats-row {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  flex: 1;
  text-align: center;
}

.stat-value {
  font-size: 22px;
  font-weight: 700;
}

.stat-label {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
}
</style>
