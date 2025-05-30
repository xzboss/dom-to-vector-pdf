import { jsPDF } from 'jspdf';
import { elementToSVG } from 'dom-to-svg';
import { svg2pdf } from 'svg2pdf.js';
import { FontManager } from './font-manager';
import type { ExportPdfOptions, LifecycleHooks } from './types';
import { inlineSvgSymbols, processSvgFonts } from './utils';

/**
 * DOM转PDF转换器
 */
export class DomToPdfConverter {
  private fontManager: FontManager;

  constructor() {
    this.fontManager = FontManager.getInstance();
  }

  /**
   * 导出PDF
   */
  public async exportPdf(options: ExportPdfOptions, hooks?: LifecycleHooks): Promise<void> {
    try {
      // 1. 获取并克隆DOM元素
      const { element, parentElement } = this.prepareDomElement(options.id);

      // 调用生命周期钩子
      hooks?.afterDomClone?.(element);

      // 2. 处理SVG符号
      inlineSvgSymbols(element);

      // 3. 转换为SVG
      const svgDocument = elementToSVG(element);
      parentElement?.removeChild(element);

      const svgElement = svgDocument.documentElement as unknown as SVGElement;
      document.body.appendChild(svgElement);
      this.prepareSvgElement(svgElement);

      // 4. 处理SVG字体
      processSvgFonts(svgElement, this.fontManager);

      // 调用生命周期钩子
      hooks?.beforeSvgConvert?.(svgElement);

      // 5. 创建PDF文档
      const pdf = this.createPdfDocument(svgElement);
      this.fontManager.setPdfInstance(pdf);

      // 6. 绘制SVG内容到PDF
      await this.renderSvgToPdf(svgElement, pdf);

      // 调用生命周期钩子
      hooks?.beforePdfGenerate?.(pdf);
      hooks?.beforePdfSave?.(pdf);

      // 7. 保存PDF
      pdf.save(`${options.filename}.pdf`);

      // 8. 清理临时元素
      svgElement.remove();
      this.fontManager.setPdfInstance(null);
    } catch (error) {
      console.error('生成PDF失败:', error);
      throw error;
    }
  }

  /**
   * 准备DOM元素
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

    // 设置克隆元素的样式
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
   * 准备SVG元素
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

    // 添加XML声明
    const utf8Declaration = document.createTextNode('<?xml version="1.0" encoding="utf-8"?>');
    svgElement.insertBefore(utf8Declaration, svgElement.firstChild);
  }

  /**
   * 创建PDF文档
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
   * 渲染SVG到PDF
   */
  private async renderSvgToPdf(svgElement: SVGElement, pdf: jsPDF): Promise<void> {
    await svg2pdf(svgElement, pdf, {
      x: 0,
      y: 0,
      width: pdf.internal.pageSize.getWidth(),
      height: pdf.internal.pageSize.getHeight(),
    });
  }
}
