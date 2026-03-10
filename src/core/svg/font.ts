import type { FontManager } from '../font/manager';

export function normalizeFontWeight(weight?: string | number | null): string {
  const weightMap: Record<string, string> = {
    normal: '400',
    bold: '700',
  };
  return weightMap[weight?.toString() || 'normal'] || weight?.toString() || '400';
}

export function processSvgFonts(element: Element, fontManager: FontManager): void {
  if (element.classList.contains('no-print')) {
    element.remove();
    return;
  }

  if (element.tagName === 'text' || element.tagName === 'tspan') {
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

    if (fontFamily) {
      element.setAttribute('font-family', fontManager.getFontId());
      element.setAttribute('font-weight', normalizeFontWeight(fontWeight));
    }

    const y = element.getAttribute('y');
    if (y) {
      element.setAttribute('y', String(Number(y) - 3));
    }
  }

  Array.from(element.children).forEach((child) => processSvgFonts(child, fontManager));
}
