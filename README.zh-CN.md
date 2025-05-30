# dom-to-vector-pdf

一个使用 jsPDF、dom-to-svg 和 svg2pdf.js 将 DOM 元素转换为矢量 PDF 的工具。

## 基础使用

```javascript
import vectorInstance from "dom-to-vector-pdf";

export const ExportToPDF = (id, title) => {
  vectorInstance.registerFont([
    {
      font: PingFangRegular,
      fontId: "PingFang",
      fontWeight: "400",
      fontStyle: "normal",
    },
    {
      font: PingFangHeavy,
      fontId: "PingFang",
      fontWeight: "700",
      fontStyle: "normal",
    },
  ]);
  vectorInstance.export({
    id,
    filename: title,
  });
};
```

## 功能特点

- 将 DOM 元素转换为矢量 PDF
- 保持矢量图形和文本质量
- 支持 SVG 元素
- 保持字体样式和字重
- 处理复杂布局

## 待办事项

### DOM 克隆
- [ ] 内联样式处理
  - [ ] 样式优先级管理
- [ ] Shadow DOM 支持
- [ ] iframe 支持

### 图标字体
- [ ] 当前实现使用 16px 作为基础字体大小进行缩放
- [ ] 需要改进图标字体大小处理

### SVG 支持
- [ ] 目前仅支持属性名与元素属性名一致的内联样式
- [ ] 需要增强 SVG 样式处理

### 文本对齐
- [ ] 文字相对背景略微偏下
  - 当前解决方案：所有文字整体上移 3 个像素单位

### 不支持的功能
- [ ] 图片背景导出
- [ ] Canvas 导出

### 字体支持
- [ ] 目前仅支持单一字体系列
  - 注册字体时 fontId 必须一致
- [ ] 需要添加多字体支持
- [ ] 考虑兼容 WOFF2 格式

### 图片导出
- [ ] 图片导出效果需要改进

## 贡献

欢迎贡献代码！请随时提交 Pull Request。

## 许可证

MIT 
