import type { FontManager } from './font-manager';

/**
 * Convert font weight
 * @param weight Font weight
 * @returns Normalized font weight
 */
export function normalizeFontWeight(weight?: string | number | null): string {
  const weightMap: any = {
    normal: '400',
    bold: '700',
  };
  return weightMap[weight?.toString() || 'normal'] || weight?.toString() || '400';
}

/**
 * Calculate SVG symbol scale ratio
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
 * Symbol element in inline SVG
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

    // Create <g> container preserving all attributes
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Copy all attributes except href
    Array.from(use.attributes).forEach((attr) => {
      if (attr.name !== 'xlink:href' && attr.name !== 'href') {
        g.setAttribute(attr.name, attr.value);
      }
    });

    // Insert scaled path
    g.innerHTML = `
        <g transform="scale(${calculateSymbolScale(symbol)})">
          ${symbol.innerHTML}
        </g>
      `;

    // Replace and preserve parent SVG dimensions
    use.replaceWith(g);
  });
}

/**
 * Recursively process SVG element font attributes
 */
export function processSvgFonts(element: Element, fontManager: FontManager): void {
  if (element.classList.contains('no-print')) {
    element.remove();
    return;
  }

  if (element.tagName === 'text' || element.tagName === 'tspan') {
    // Parse style string
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

    // Adjust y coordinate
    const y = element.getAttribute('y');
    if (y) {
      element.setAttribute('y', String(Number(y) - 3));
    }
  }

  // Recursively process child elements
  Array.from(element.children).forEach((child) => processSvgFonts(child, fontManager));
}
