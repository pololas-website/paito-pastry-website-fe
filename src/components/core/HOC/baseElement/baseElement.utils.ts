export interface IBaseElementProperties {
  small?: boolean;
  primary?: boolean;
  contrast?: boolean;
  error?: string | boolean;
}

export interface IStyles {
  [index: string]: string;
}

/**
 * Take boolean/string properties as an object and Map them to a css basic element classes, where each property name maps to a css className.
 * (i.e. small, primary, contrast)
 *
 * @param  {object} classNames boolean | string | undefined classNames
 * @returns an array of basic-element classes
 */
export function getBasicElementClasses(baseProperties: IBaseElementProperties) {
  return Object.keys(baseProperties).filter(
    (property) => baseProperties[property as keyof IBaseElementProperties],
  );
}

/**
 * Get all the existent valid classNames in {@link moduleStyles} given by the
 * {@link basicElementClasses} classNames array and return a valid and applicable array of
 * classNames with the provided {@link extraClass}.
 * @param moduleStyles
 * @param basicElementClasses
 * @param extraClass
 * @returns an Array of existent valid classNames.
 */
function composeAllClasses(
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
  baseProperties: IBaseElementProperties,
  moduleStyles: IStyles,
  extraClass?: string,
) {
  const basicElementClasses = getBasicElementClasses(baseProperties);
  return composeAllClasses(moduleStyles, basicElementClasses, extraClass);
}
