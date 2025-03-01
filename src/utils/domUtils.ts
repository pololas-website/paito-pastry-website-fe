export function isOverFlowing(htmlElement: HTMLElement) {
  return htmlElement.scrollHeight > htmlElement.clientHeight;
}
