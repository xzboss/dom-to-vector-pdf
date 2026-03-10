import { elementToSVG } from 'dom-to-svg';

export function convertToSvg(element: HTMLElement): SVGElement {
  const svgDocument = elementToSVG(element);
  const svgElement = svgDocument.documentElement as unknown as SVGElement;

  document.body.appendChild(svgElement);
  prepareSvgElement(svgElement);

  return svgElement;
}

function prepareSvgElement(svgElement: SVGElement): void {
  svgElement.style.cssText = `
    all: unset;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999999;
  `;

  const utf8Declaration = document.createTextNode('<?xml version="1.0" encoding="utf-8"?>');
  svgElement.insertBefore(utf8Declaration, svgElement.firstChild);
}
