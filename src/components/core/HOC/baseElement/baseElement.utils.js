/**
 * Take boolean properties as an array and Map them to a css basic element classes.
 * (i.e. small, primary, contrast)
 * Warning:
 *  - this algorithm take on account the order of the params and the map array so that the array of properties always shoud correspond to the classNamesMap provided array.
 *  - TODO: make the implemmentation robust with typescript
 *
 * @param  {Array} classNames boolean | undefined classNames
 * @returns an array of basic-element classes
 */
export function getBasicElementClasses(...classNames) {
  // prettier-ignore
  const classNamesMap = [
    'small',
    'primary',
    'contrast',
  ];

  return classNames
    .map((boolClass, i) => (boolClass ? classNamesMap[i] : ''))
    .filter((stringClassName) => stringClassName !== '');
}

export function composeAllClasses(
  moduleStyles,
  basicElementClasses,
  extraClass,
) {
  let classNames = basicElementClasses
    .map((idClassName) => moduleStyles[idClassName])
    .filter((className) => className !== undefined)
    .join(' ');

  return classNames + (extraClass ? ` ${extraClass}` : '');
}
