export interface CloneResult {
  element: HTMLElement;
  parentElement: HTMLElement | null;
}

export function cloneElement(selector: string): CloneResult {
  const originElement = document.querySelector(selector);

  if (!originElement) {
    throw new Error(`Element with selector "${selector}" not found`);
  }

  const parentElement = originElement.parentElement;
  const element = originElement.cloneNode(true) as HTMLElement;

  element.style.cssText = `
    z-index: -999999;
    position: absolute;
    top: 0;
    left: 0;
  `;
  parentElement?.appendChild(element);
  return { element, parentElement };
}

export function removeClonedElement(element: HTMLElement, parentElement: HTMLElement | null): void {
  parentElement?.removeChild(element);
}
