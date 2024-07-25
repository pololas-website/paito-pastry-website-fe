/**
 * Take boolean properties and Map them to a composed string css class
 * Warning:
 *  - this algorithm take on account the order of the params and the map array so that the first part always should be in order.
 *  - also the las argumen should be of type: string | undefined, since we are also composing the className as the last argument.
 * @param  {Array} classNames boolean | undefined classNames
 * @returns a composes classes
 */
export function flatClasses(...classNames) {
  // prettier-ignore
  const classNamesMap = [
    'small',
    'primary',
    'contrast',
    classNames[classNames.length - 1]
  ];

  return classNames
    .map((boolClass, i) => (boolClass ? classNamesMap[i] : ''))
    .filter((className) => className !== '')
    .join(' ');
}
