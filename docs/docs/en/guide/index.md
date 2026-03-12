# dom-to-vector-pdf

A tool for converting DOM elements to vector PDFs using jsPDF, dom-to-svg and svg2pdf.js.

## Online Demo

[Online Demo](https://dom-to-vector-pdf.xzboss.cn/vue-example)

## Installation

```bash
npm install dom-to-vector-pdf
```

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


## Features

- Converts DOM elements to vector PDFs
- Preserves vector graphics and text
- Supports SVG elements
- Maintains font styles and weights
- Handles complex layouts

Supported styles can be seen in the online demo.

## FAQ

1. Only TTF fonts are supported. You can use a local project import or an online CDN URL.
2. Font files can be subsetted. A subset containing common characters is usually under 1MB. **⚠️⚠️⚠️ Many online subsetting tools omit the space character**, which causes rendering to fail. It is recommended to use a library for subsetting. Common Chinese character sets are available on the [Chinese Character Sets](./font-subset) page.
3. Export speed is affected by font size and network speed. Resources must finish loading before the export begins — the larger and more numerous the fonts, the slower the export and the larger the resulting PDF.

## Pipeline

This library is built on dom-to-svg and svg2pdf. The flow is DOM → SVG → PDF, so there is some SVG serialization overhead, but it generally does not affect performance. Export is typically fast; if it is slow, the font file is likely too large and should be subsetted.

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
