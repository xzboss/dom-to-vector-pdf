[中文](README.zh-CN.md) ｜ [English](README.md)

# dom-to-vector-pdf

A tool for converting DOM elements to vector PDFs using jsPDF, dom-to-svg and svg2pdf.js.

## Online Demo

## Installation

```bash
npm install dom-to-vector-pdf
```

## Configuration Options

### Export Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| selector | string | required | CSS selector for the DOM element to export |
| filename | string | required | Exported PDF file name |

### Font Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| font | string | required | Font file path or URL |
| fontStyle | 'normal' \| 'italic' | 'normal' | Font style |
| fontWeight | string \| number | - | Font weight (100-900) |

### Lifecycle Hooks

| Hook | Type | Description |
|------|------|-------------|
| afterDomClone | (clonedElement: HTMLElement) => void | Triggered after DOM clone |
| beforeSvgConvert | (svgElement: SVGElement) => void | Triggered before SVG conversion |
| beforePdfGenerate | (pdf: jsPDF) => void | Triggered before PDF generation |
| beforePdfSave | (pdf: jsPDF) => void | Triggered before PDF save |

## Basic Usage

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

## Features

- Converts DOM elements to vector PDFs
- Preserves vector graphics and text
- Supports SVG elements
- Maintains font styles and weights
- Handles complex layouts

## Contributing

### Setup
```
pnpm i
```
### Run demo
```
pnpm dev:vue
```
Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
