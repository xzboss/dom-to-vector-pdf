import { jsPDF } from 'jspdf';

/**
 * Export PDF配置项
 */
export interface ExportPdfOptions {
  /** DOM element selector to export */
  selector: string;
  /** Exported PDF file name */
  filename: string;
  /** PDF orientation, default is portrait */
  orientation?: 'portrait' | 'landscape';
  /** Unit, default is px */
  unit?: 'pt' | 'px' | 'in' | 'mm' | 'cm' | 'ex' | 'em' | 'pc';
  /** resource load timeout, default is 5000 */
  resourceTimeout?: number;
  /** Custom hook for processing SVG elements */
  beforeSvgConvert?: (svgElement: SVGElement) => void;
  /** Custom hook for processing PDF document */
  beforePdfSave?: (pdf: jsPDF) => void;
}

/**
 * Font registration options
 */
export interface FontRegisterOptions {
  /** Font file path or URL */
  font: string;
  /** Font ID for identifying the font */
  fontId: string;
  /** 字体样式 (normal/italic) */
  fontStyle?: 'normal' | 'italic';
  /** Font weight (100-900) */
  fontWeight?: string | number;
}

/**
 * Lifecycle hooks
 */
export interface LifecycleHooks {
  /** Triggered after DOM clone */
  afterDomClone?: (clonedElement: HTMLElement) => void;
  /** Triggered before SVG conversion */
  beforeSvgConvert?: (svgElement: SVGElement) => void;
  /** Triggered before PDF generation */
  beforePdfGenerate?: (pdf: jsPDF) => void;
  /** Triggered before PDF save */
  beforePdfSave?: (pdf: jsPDF) => void;
}
