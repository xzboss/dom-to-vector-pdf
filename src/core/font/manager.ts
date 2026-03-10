import { jsPDF } from 'jspdf';
import type { FontRegisterOptions } from '../types';
import { normalizeFontWeight } from '../svg/font';

export class FontManager {
  private static instance: FontManager;
  private registeredFonts: Map<string, ArrayBuffer> = new Map();
  private pdfInstance?: jsPDF | null;
  private callbackList: (() => void)[] = [];
  private fontId: string = 'PingFang';

  private constructor() {}

  public getFontId(): string {
    return this.fontId;
  }

  public static getInstance(): FontManager {
    if (!FontManager.instance) {
      FontManager.instance = new FontManager();
    }
    return FontManager.instance;
  }

  public setPdfInstance(pdf: jsPDF | null): void {
    this.pdfInstance = pdf;
    this.callbackList.forEach((callback) => callback());
    this.callbackList = [];
  }

  public registerFont(options: FontRegisterOptions): void {
    this.fontId = options.fontId;
    this.addFontToPdf(options);
  }

  public registerFonts(options: FontRegisterOptions[]): void {
    options.map((font) => this.registerFont(font));
  }

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
