# dom-to-vector-pdf

一个使用 jsPDF、dom-to-svg 和 svg2pdf.js 将 DOM 元素转换为矢量 PDF 的工具。

## 在线示例

## 安装

```bash
npm install dom-to-vector-pdf
```

## 基本用法

```javascript
import fontTTF from '@/assets/your-font.ttf'

import vectorInstance from "dom-to-vector-pdf";

export const ExportToPDF = (selector, title) => {
  vectorInstance.registerFont([
    {
      font: fontTTF,
      fontWeight: "400",
      fontStyle: "normal",
    },
    {
      font: fontTTF,
      fontWeight: "700",
      fontStyle: "normal",
    },
  ]);
  vectorInstance.exportPDF({
    selector,
    filename: title,
  });
};
```

## 配置选项

### 导出选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| selector | string | 必填 | 要导出的DOM元素的CSS选择器 |
| filename | string | 必填 | 导出的PDF文件名 |

### 字体选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| font | string | 必填 | 字体文件路径或URL |
| fontStyle | 'normal' \| 'italic' | 'normal' | 字体样式 |
| fontWeight | string \| number | - | 字体粗细(100-900) |

### 生命周期钩子

| 钩子 | 类型 | 说明 |
|------|------|------|
| afterDomClone | (clonedElement: HTMLElement) => void | DOM克隆后触发 |
| beforeSvgConvert | (svgElement: SVGElement) => void | SVG转换前触发 |
| beforePdfGenerate | (pdf: jsPDF) => void | PDF生成前触发 |
| beforePdfSave | (pdf: jsPDF) => void | PDF保存前触发 |


## 特性

- 将DOM元素转换为矢量PDF
- 保持矢量图形和文本
- 支持SVG元素
- 保持字体样式和粗细
- 处理复杂布局
支持的样式可以在在线演示里面看见

## 常见问题
1. 字体目前只支持ttf，可以是项目直接import，也可以是在线cdn链接
2. 字体包可以裁剪，一般包含常用字都能能裁剪到1MB以内。
**⚠️⚠️⚠️这里很多在线裁剪的库裁剪完后不会包含空格**，导致渲染失败。这个最好用库来裁剪。
这里提供汉字常用字https://github.com/xzboss/PingFangSC，有版权问题，我裁剪后的已经删除，只能大家自己去裁剪了。

## 运行路径
本库基于dom-to-svg，svg2pdf两个库做的，通过将dom转svg转pdf这样的链路实现。所以会有一层svg序列化的开销，但是一般来说不太影响性能。正常页面导出速度都挺快的，如果慢的话可能是字体包太大了，需要裁剪一下。

## 贡献

欢迎贡献！请随时提交Pull Request。

## 许可证

MIT 
