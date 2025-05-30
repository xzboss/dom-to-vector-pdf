# dom-to-vector-pdf

A tool for converting DOM elements to vector PDFs using jsPDF, dom-to-svg and svg2pdf.js.

## Installation

```bash
npm install dom-to-vector-pdf
```

## Configuration Options

### Export Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| id | string | required | DOM element ID to export |
| filename | string | required | Exported PDF file name |
| orientation | 'portrait' \| 'landscape' | 'portrait' | PDF orientation |
| unit | 'px' | Unit for measurements(only px) |
| beforeSvgConvert | (svgElement: SVGElement) => void | - | Custom hook for processing SVG elements |
| beforePdfSave | (pdf: jsPDF) => void | - | Custom hook for processing PDF document |

### Font Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| font | string | required | Font file path or URL |
| fontId | string | required | Font ID for identifying the font |
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

## Features

- Converts DOM elements to vector PDFs
- Preserves vector graphics and text
- Supports SVG elements
- Maintains font styles and weights
- Handles complex layouts

## Todo List

### DOM Cloning
- [ ] Inline style handling
  - [ ] Style priority management
- [ ] Shadow DOM support
- [ ] iframe support

### Icon Fonts
- [ ] Current implementation uses 16px as base font size for scaling
- [ ] Need to improve icon font size handling

### SVG Support
- [ ] Currently only supports inline styles where property names match element attributes
- [ ] Need to enhance SVG style handling

### Text Alignment
- [ ] Text appears slightly lower than background
  - Current workaround: Shift all text up by 3 pixels

### Unsupported Features
- [ ] Image background export
- [ ] Canvas export
- [ ] other unit

### Font Support
- [ ] Currently limited to single font family
  - Font ID must be consistent during registration
- [ ] Need to add support for multiple fonts
- [ ] Consider WOFF2 format compatibility

### Image Export
- [ ] Image export quality needs improvement

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
