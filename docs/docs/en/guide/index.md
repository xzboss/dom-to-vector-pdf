# dom-to-vector-pdf

A tool for converting DOM elements to vector PDFs using jsPDF, dom-to-svg and svg2pdf.js.

## Online Demo

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

1. **Fonts**: Only TTF is supported. You can use a local import or a CDN URL. Font subsets can be used; a subset with common characters is usually under 1MB. **Many online subset tools omit the space character**, which can cause rendering to fail. Prefer a library for subsetting. A reference set of common Chinese characters is available at https://github.com/xzboss/PingFangSC (license applies; the repo does not include pre-subset fonts).

2. **Pipeline**: This library is built on dom-to-svg and svg2pdf. The flow is DOM → SVG → PDF, so there is some SVG serialization overhead, but it usually does not affect performance. Export is typically fast; slowness is often due to large font files — consider subsetting.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
