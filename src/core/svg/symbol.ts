function calculateSymbolScale(symbol: SVGElement): number {
  const viewBox = symbol.getAttribute('viewBox');
  if (!viewBox) {
    return 1;
  }

  const [, , width] = viewBox.split(' ').map(Number);
  const expectedSize = 16; // 1em 通常计算的像素值
  return expectedSize / width;
}

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

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    Array.from(use.attributes).forEach((attr) => {
      if (attr.name !== 'xlink:href' && attr.name !== 'href') {
        g.setAttribute(attr.name, attr.value);
      }
    });

    g.innerHTML = `
        <g transform="scale(${calculateSymbolScale(symbol)})">
          ${symbol.innerHTML}
        </g>
      `;

    use.replaceWith(g);
  });
}
