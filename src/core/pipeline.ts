import type { ExportPdfOptions, LifecycleHooks } from './types';
import type { FontManager } from './font/manager';
import { cloneElement, removeClonedElement } from './dom/clone';
import { waitForResources } from './dom/resource';
import { inlineSvgSymbols } from './svg/symbol';
import { convertToSvg } from './svg/convert';
import { processSvgFonts } from './svg/font';
import { createPdfDocument } from './pdf/create';
import { renderSvgToPdf } from './pdf/render';

export async function exportPdf(
  options: ExportPdfOptions,
  fontManager: FontManager,
  hooks?: LifecycleHooks
): Promise<void> {
  let clonedElement: HTMLElement | null = null;
  let parentElement: HTMLElement | null = null;
  let svgElement: SVGElement | null = null;

  try {
    // 1. Clone DOM element
    const cloneResult = cloneElement(options.selector);
    clonedElement = cloneResult.element;
    parentElement = cloneResult.parentElement;

    // 2. Hook: afterDomClone
    hooks?.afterDomClone?.(clonedElement);

    // 3. Inline SVG symbols (<use> -> inline content)
    inlineSvgSymbols(clonedElement);

    // 4. Wait for resources (images etc.)
    await waitForResources(clonedElement, options.resourceTimeout);

    // 5. Convert DOM to SVG
    svgElement = convertToSvg(clonedElement);
    removeClonedElement(clonedElement, parentElement);
    clonedElement = null;

    // 6. Process SVG font attributes
    processSvgFonts(svgElement, fontManager);

    // 7. Hook: beforeSvgConvert
    hooks?.beforeSvgConvert?.(svgElement);

    // 8. Create PDF document
    const pdf = createPdfDocument(svgElement);
    fontManager.setPdfInstance(pdf);

    // 9. Render SVG into PDF
    await renderSvgToPdf(svgElement, pdf);

    // 10. Hook: beforePdfSave
    hooks?.beforePdfGenerate?.(pdf);
    hooks?.beforePdfSave?.(pdf);

    // 11. Save PDF
    pdf.save(`${options.filename}.pdf`);

    // 12. Cleanup
    svgElement.remove();
    svgElement = null;
    fontManager.setPdfInstance(null);
  } catch (error) {
    // Cleanup on error
    if (clonedElement && parentElement) {
      removeClonedElement(clonedElement, parentElement);
    }
    svgElement?.remove();
    fontManager.setPdfInstance(null);

    console.error('PDF generation failed:', error);
    throw error;
  }
}
