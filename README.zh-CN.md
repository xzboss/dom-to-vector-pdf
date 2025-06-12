# dom-to-vector-pdf

一个使用 jsPDF、dom-to-svg 和 svg2pdf.js 将 DOM 元素转换为矢量 PDF 的工具。

## 安装

```bash
npm install dom-to-vector-pdf
```

## 配置选项

### 导出选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| id | string | 必填 | 要导出的DOM元素ID |
| filename | string | 必填 | 导出的PDF文件名 |
| orientation | 'portrait' \| 'landscape' | 'portrait' | PDF方向 |
| unit | 'px' | 测量单位（只支持px） |
| beforeSvgConvert | (svgElement: SVGElement) => void | - | SVG元素处理钩子 |
| beforePdfSave | (pdf: jsPDF) => void | - | PDF文档处理钩子 |

### 字体选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| font | string | 必填 | 字体文件路径或URL |
| fontId | string | 必填 | 字体ID |
| fontStyle | 'normal' \| 'italic' | 'normal' | 字体样式 |
| fontWeight | string \| number | - | 字体粗细(100-900) |

### 生命周期钩子

| 钩子 | 类型 | 说明 |
|------|------|------|
| afterDomClone | (clonedElement: HTMLElement) => void | DOM克隆后触发 |
| beforeSvgConvert | (svgElement: SVGElement) => void | SVG转换前触发 |
| beforePdfGenerate | (pdf: jsPDF) => void | PDF生成前触发 |
| beforePdfSave | (pdf: jsPDF) => void | PDF保存前触发 |

## 基本用法

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
  vectorInstance.exportPDF({
    id,
    filename: title,
  });
};
```

## 特性

- 将DOM元素转换为矢量PDF
- 保持矢量图形和文本
- 支持SVG元素
- 保持字体样式和粗细
- 处理复杂布局

## 待办事项

### DOM克隆
- [ ] 内联样式处理
  - [ ] 样式优先级管理
- [ ] Shadow DOM支持
- [ ] iframe支持

### 图标字体
- [ ] 当前实现使用16px作为基础字体大小进行缩放
- [ ] 需要改进图标字体大小处理

### SVG支持
- [ ] 目前仅支持属性名与元素属性匹配的内联样式
- [ ] 需要增强SVG样式处理

### 文本对齐
- [ ] 文本位置略低于背景
  - 当前解决方案：将所有文本向上偏移3像素

### 不支持的功能
- [ ✅ ] 图片背景导出
- [ ] Canvas导出
- [ ] 其他单位支持

### 字体支持
- [ ] 目前仅限于单个字体系列
  - 注册时字体ID必须保持一致
- [ ] 需要添加多字体支持
- [ ] 考虑WOFF2格式兼容性

### 图片导出
- [ ] 图片导出质量需要改进

## 贡献

欢迎贡献！请随时提交Pull Request。

## 许可证

MIT 
