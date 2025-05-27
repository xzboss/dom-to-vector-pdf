import { DomToPdfConverter } from './dom-converter';
import { FontManager } from './font-manager';
import type { ExportPdfOptions, FontRegisterOptions, LifecycleHooks } from './types';

/**
 * DOM转PDF工具实例
 */
class DomToPdf {
  private converter: DomToPdfConverter;
  private fontManager: FontManager;

  constructor() {
    this.converter = new DomToPdfConverter();
    this.fontManager = FontManager.getInstance();
  }

  /**
   * 导出PDF
   * @param options 导出配置
   * @param hooks 生命周期钩子
   */
  public async export(options: ExportPdfOptions, hooks?: LifecycleHooks): Promise<void> {
    await this.converter.exportPdf(options, hooks);
  }

  /**
   * 注册字体
   * @param options 字体注册选项
   */
  public registerFont(options: FontRegisterOptions | FontRegisterOptions[]): void {
    if (Array.isArray(options)) {
      this.fontManager.registerFonts(options);
    } else {
      this.fontManager.registerFont(options);
    }
  }
}

// 导出单例实例
export const instance = new DomToPdf();
export default instance;
