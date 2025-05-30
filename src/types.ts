import { jsPDF } from 'jspdf';

/**
 * 导出PDF配置项
 */
export interface ExportPdfOptions {
  /** 要导出的DOM元素ID */
  id: string;
  /** 导出的PDF文件名 */
  filename: string;
  /** PDF方向，默认为 portrait */
  orientation?: 'portrait' | 'landscape';
  /** 单位，默认为 px */
  unit?: 'pt' | 'px' | 'in' | 'mm' | 'cm' | 'ex' | 'em' | 'pc';
  /** 自定义处理SVG元素的钩子 */
  beforeSvgConvert?: (svgElement: SVGElement) => void;
  /** 自定义处理PDF文档的钩子 */
  beforePdfSave?: (pdf: jsPDF) => void;
}

/**
 * 字体注册选项
 */
export interface FontRegisterOptions {
  /** 字体文件路径或URL */
  font: string;
  /** 字体ID，用于标识字体 */
  fontId: string;
  /** 字体样式 (normal/italic) */
  fontStyle?: 'normal' | 'italic';
  /** 字体粗细 (100-900) */
  fontWeight?: string | number;
}

/**
 * 生命周期钩子
 */
export interface LifecycleHooks {
  /** DOM克隆后触发 */
  afterDomClone?: (clonedElement: HTMLElement) => void;
  /** SVG转换前触发 */
  beforeSvgConvert?: (svgElement: SVGElement) => void;
  /** PDF生成前触发 */
  beforePdfGenerate?: (pdf: jsPDF) => void;
  /** PDF保存前触发 */
  beforePdfSave?: (pdf: jsPDF) => void;
}
