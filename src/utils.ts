import type { FontManager } from './font-manager';

/**
 * 转换字体字重
 * @param weight 字体粗细
 * @returns 标准化后的字重
 */
export function normalizeFontWeight(weight?: string | number | null): string {
  const weightMap: any = {
    normal: '400',
    bold: '700',
  };
  return weightMap[weight?.toString() || 'normal'] || weight?.toString() || '400';
}

/**
 * 计算SVG symbol的缩放比例
 */
export function calculateSymbolScale(symbol: SVGElement): number {
  const viewBox = symbol.getAttribute('viewBox');
  if (!viewBox) {
    return 1;
  }

  const [, , width] = viewBox.split(' ').map(Number);
  // 1em 通常计算的像素值
  const expectedSize = 16;
  return expectedSize / width;
}

/**
 * 内联SVG中的symbol元素
 */
export function inlineSvgSymbols(element: HTMLElement | SVGElement): void {
  const uses = element.querySelectorAll('use');

  uses.forEach((use) => {
    const href = use.getAttribute('xlink:href') || use.getAttribute('href');
    if (!href) {
      return;
    }

    const symbol = document.querySelector(href) as SVGElement | null;
    if (!symbol) {
      return;
    }

    // 创建 <g> 容器保留所有属性
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // 复制除href外的所有属性
    Array.from(use.attributes).forEach((attr) => {
      if (attr.name !== 'xlink:href' && attr.name !== 'href') {
        g.setAttribute(attr.name, attr.value);
      }
    });

    // 插入缩放后的路径
    g.innerHTML = `
        <g transform="scale(${calculateSymbolScale(symbol)})">
          ${symbol.innerHTML}
        </g>
      `;

    // 替换并保留父SVG尺寸
    use.replaceWith(g);
  });
}

/**
 * 递归处理SVG元素的字体属性
 */
export function processSvgFonts(element: Element, fontManager: FontManager): void {
  if (element.classList.contains('no-print')) {
    element.remove();
    return;
  }

  if (element.tagName === 'text' || element.tagName === 'tspan') {
    // 解析style字符串
    const style = element.getAttribute('style');
    if (style) {
      style.split(';').forEach((css: string) => {
        const [key, value] = css.split(':');
        if (!key) return;
        element.setAttribute(key.trim(), value?.trim());
      });
    }

    element.removeAttribute('style');

    const fontFamily = element.getAttribute('font-family');
    const fontWeight = element.getAttribute('font-weight');

    // TODO
    if (fontFamily) {
      element.setAttribute('font-family', fontManager.getFontId());
      element.setAttribute('font-weight', normalizeFontWeight(fontWeight));
    }

    // 调整y坐标
    const y = element.getAttribute('y');
    if (y) {
      element.setAttribute('y', String(Number(y) - 3));
    }
  }

  // 递归处理子元素
  Array.from(element.children).forEach((child) => processSvgFonts(child, fontManager));
}
