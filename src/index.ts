import { DomToPdfConverter } from './dom-converter';
import { FontManager } from './font-manager';
import type { ExportPdfOptions, FontRegisterOptions, LifecycleHooks } from './types';

/**
 * DOM to PDF tool instance
 */
class DOMToPDF {
  private converter: DomToPdfConverter;
  private fontManager: FontManager;

  constructor() {
    this.converter = new DomToPdfConverter();
    this.fontManager = FontManager.getInstance();
  }

  /**
   * Export PDF
   * @param options Export configuration
   * @param hooks Lifecycle hooks
   */
  public async exportPDF(options: ExportPdfOptions, hooks?: LifecycleHooks): Promise<void> {
    await this.converter.exportPdf(options, hooks);
  }

  /**
   * Register font
   * @param options Font registration options
   */
  public registerFont(options: FontRegisterOptions | FontRegisterOptions[]): void {
    if (Array.isArray(options)) {
      this.fontManager.registerFonts(options);
    } else {
      this.fontManager.registerFont(options);
    }
  }
}

// Export singleton instance
export const instance = new DOMToPDF();
export default instance;
