import { jsPDF } from 'jspdf';
import { elementToSVG } from 'dom-to-svg';
import { svg2pdf } from 'svg2pdf.js';
import { FontManager } from './font-manager';
import type { ExportPdfOptions, LifecycleHooks } from './types';
import { inlineSvgSymbols, processSvgFonts } from './utils';

/**
 * DOM to PDF Converter
 */
export class DomToPdfConverter {
  private fontManager: FontManager;
  private resourceQueue: Promise<void>[] = [];

  constructor() {
    this.fontManager = FontManager.getInstance();
  }

  /**
   * Export PDF
   */
  public async exportPdf(options: ExportPdfOptions, hooks?: LifecycleHooks): Promise<void> {
    try {
      // 1. Get and clone DOM element
      const { element, parentElement } = this.prepareDomElement(options.id);

      // Call lifecycle hook
      hooks?.afterDomClone?.(element);

      // 2. Process SVG symbols
      inlineSvgSymbols(element);

      // 3. Load resource
      await this.loadResource(element);

      // 4. Convert to SVG
      const svgDocument = elementToSVG(element);
      parentElement?.removeChild(element);

      const svgElement = svgDocument.documentElement as unknown as SVGElement;
      document.body.appendChild(svgElement);
      this.prepareSvgElement(svgElement);

      // 5. Process SVG fonts
      processSvgFonts(svgElement, this.fontManager);

      // Call lifecycle hook
      hooks?.beforeSvgConvert?.(svgElement);

      // 6. Create PDF document
      const pdf = this.createPdfDocument(svgElement);
      this.fontManager.setPdfInstance(pdf);

      // 7. Draw SVG content to PDF
      await this.renderSvgToPdf(svgElement, pdf);

      // Call lifecycle hook
      hooks?.beforePdfGenerate?.(pdf);
      hooks?.beforePdfSave?.(pdf);

      // 8. Save PDF
      pdf.save(`${options.filename}.pdf`);

      // 9. Clean up temporary elements
      svgElement.remove();
      this.fontManager.setPdfInstance(null);
    } catch (error) {
      console.error('生成PDF失败:', error);
      throw error;
    }
  }

  /**
   * Prepare DOM element
   */
  private prepareDomElement(id: string): {
    element: HTMLElement;
    parentElement: HTMLElement | null;
  } {
    const originElement = document.querySelector(id);
    if (!originElement) {
      throw new Error(`Element with id "${id}" not found`);
    }

    const parentElement = originElement.parentElement;
    const element = originElement.cloneNode(true) as HTMLElement;

    // Set cloned element styles
    element.style.cssText = `
          z-index: -999999;
          position: absolute;
          top: 0;
          left: 0;
        `;
    console.log(parentElement, '??????');
    parentElement?.appendChild(element);
    return { element, parentElement };
  }

  /**
   * Prepare SVG element
   */
  private prepareSvgElement(svgElement: SVGElement): void {
    svgElement.style.cssText = `
      all: unset;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -999999;
    `;

    // Add XML declaration
    const utf8Declaration = document.createTextNode('<?xml version="1.0" encoding="utf-8"?>');
    svgElement.insertBefore(utf8Declaration, svgElement.firstChild);
  }

  /**
   * Create PDF document
   */
  private createPdfDocument(svgElement: SVGElement): jsPDF {
    const { width, height } = svgElement.getBoundingClientRect();

    return new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [width, height],
    });
  }

  /**
   * Render SVG to PDF
   */
  private async renderSvgToPdf(svgElement: SVGElement, pdf: jsPDF): Promise<void> {
    await svg2pdf(svgElement, pdf, {
      x: 0,
      y: 0,
      width: pdf.internal.pageSize.getWidth(),
      height: pdf.internal.pageSize.getHeight(),
    });
  }

  /**
   * Load resource
   */
  private async loadResource(element: HTMLElement | SVGElement): Promise<PromiseSettledResult<void>[]> {
    this.resourceQueue = [];
    const resources = element.querySelectorAll('img');
    resources.forEach((resource) => {
      this.resourceQueue.push(
        new Promise((resolve) => {
          resource.onload = () => resolve(void 0);
        })
      );
    });
    return Promise.allSettled(this.resourceQueue);
  }
}
