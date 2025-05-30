import { jsPDF } from 'jspdf';
import type { FontRegisterOptions } from './types';
import { normalizeFontWeight } from './utils';

/**
 * 字体管理器
 */
export class FontManager {
  private static instance: FontManager;
  private registeredFonts: Map<string, ArrayBuffer> = new Map();
  private pdfInstance?: jsPDF | null;
  private callbackList: (() => void)[] = [];
  private fontId: string = 'PingFang';

  private constructor() {}

  /**
   * 获取字体ID
   */
  public getFontId(): string {
    return this.fontId;
  }

  /**
   * 获取字体管理器单例
   */
  public static getInstance(): FontManager {
    if (!FontManager.instance) {
      FontManager.instance = new FontManager();
    }
    return FontManager.instance;
  }

  /**
   * 设置PDF实例
   */
  public setPdfInstance(pdf: jsPDF | null): void {
    this.pdfInstance = pdf;
    this.callbackList.forEach((callback) => callback());
    this.callbackList = [];
  }

  /**
   * 注册字体
   */
  public registerFont(options: FontRegisterOptions): void {
    this.fontId = options.fontId;
    this.addFontToPdf(options);
  }

  /**
   * 批量注册字体
   */
  public registerFonts(options: FontRegisterOptions[]): void {
    options.map((font) => this.registerFont(font));
  }

  /**
   * 添加字体到PDF实例
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
