import { jsPDF } from 'jspdf';

export function createPdfDocument(svgElement: SVGElement): jsPDF {
  const { width, height } = svgElement.getBoundingClientRect();

  return new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [width, height],
  });
}
