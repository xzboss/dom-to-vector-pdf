import { jsPDF } from 'jspdf';
import type { FontRegisterOptions } from './types';
import { normalizeFontWeight } from './utils';

/**
 * Font manager
 */
export class FontManager {
  private static instance: FontManager;
  private registeredFonts: Map<string, ArrayBuffer> = new Map();
  private pdfInstance?: jsPDF | null;
  private callbackList: (() => void)[] = [];
  private fontId: string = 'PingFang';

  private constructor() {}

  /**
   * Get font ID
   */
  public getFontId(): string {
    return this.fontId;
  }

  /**
   * Get font manager singleton
   */
  public static getInstance(): FontManager {
    if (!FontManager.instance) {
      FontManager.instance = new FontManager();
    }
    return FontManager.instance;
  }

  /**
   * Set PDF instance
   */
  public setPdfInstance(pdf: jsPDF | null): void {
    this.pdfInstance = pdf;
    this.callbackList.forEach((callback) => callback());
    this.callbackList = [];
  }

  /**
   * Register font
   */
  public registerFont(options: FontRegisterOptions): void {
    this.fontId = options.fontId;
    this.addFontToPdf(options);
  }

  /**
   * Batch register fonts
   */
  public registerFonts(options: FontRegisterOptions[]): void {
    options.map((font) => this.registerFont(font));
  }

  /**
   * Add font to PDF instance
   */
  private addFontToPdf(options: FontRegisterOptions): void {
    if (!this.pdfInstance) {
      this.callbackList.push(() => this.addFontToPdf(options));
      return;
    }
    this.pdfInstance.addFont(
      options.font,
      options.fontId,
      options.fontStyle || 'normal',
      normalizeFontWeight(options.fontWeight)
    );
  }
}
