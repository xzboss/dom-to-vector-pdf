import { FontManager } from './font/manager';
import { exportPdf } from './pipeline';
import type { ExportPdfOptions, FontRegisterOptions, LifecycleHooks } from './types';

export type { ExportPdfOptions, FontRegisterOptions, LifecycleHooks } from './types';

class DOMToPDF {
  private fontManager: FontManager;

  constructor() {
    this.fontManager = FontManager.getInstance();
  }

  public async exportPDF(options: ExportPdfOptions, hooks?: LifecycleHooks): Promise<void> {
    await exportPdf(options, this.fontManager, hooks);
  }

  public registerFont(options: FontRegisterOptions | FontRegisterOptions[]): void {
    if (Array.isArray(options)) {
      this.fontManager.registerFonts(options);
    } else {
      this.fontManager.registerFont(options);
    }
  }
}

export const instance = new DOMToPDF();
export default instance;
