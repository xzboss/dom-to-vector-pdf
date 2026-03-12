import { jsPDF } from 'jspdf';
import { svg2pdf } from 'svg2pdf.js';

export async function renderSvgToPdf(svgElement: SVGElement, pdf: jsPDF): Promise<void> {
  await svg2pdf(svgElement, pdf, {
    x: 0,
    y: 0,
    width: pdf.internal.pageSize.getWidth(),
    height: pdf.internal.pageSize.getHeight(),
  });
}
