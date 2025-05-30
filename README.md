# dom-to-vector-pdf

A tool for converting DOM elements to vector PDFs using jsPDF, dom-to-svg and svg2pdf.js.

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
  vectorInstance.export({
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
