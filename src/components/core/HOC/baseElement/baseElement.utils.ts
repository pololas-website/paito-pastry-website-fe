export interface IBasicClasses {
  small?: boolean;
  primary?: boolean;
  contrast?: boolean;
  error?: string | boolean;
}

export interface IStyles {
  [index: string]: string;
}

/**
 * Take boolean properties as an object and Map them to a css basic element classes.
 * (i.e. small, primary, contrast)
 *
 * @param  {object} classNames boolean | string | undefined classNames
 * @returns an array of basic-element classes
 */
export function getBasicElementClasses(classNames: IBasicClasses) {
  return Object.keys(classNames).filter(
    (className) => classNames[className as keyof IBasicClasses],
  );
}

export function composeAllClasses(
  moduleStyles: IStyles,
  basicElementClasses: string[],
  extraClass?: string,
) {
  const classNames = basicElementClasses
    .map((idClassName) => moduleStyles[idClassName])
    .filter((className) => className !== undefined)
    .join(' ');

  return classNames + (extraClass ? ` ${extraClass}` : '');
}

export function getComposedClassName(
  classNames: IBasicClasses,
  moduleStyles: IStyles,
  extraClass?: string,
) {
  const basicElementClasses = getBasicElementClasses(classNames);
  return composeAllClasses(moduleStyles, basicElementClasses, extraClass);
}
