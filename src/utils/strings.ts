/**
 * Joins an Array of strings into a singular string separated by 'separator'.
 * All falsy values are ignored
 * @param {[]} stringArray Array of strings to join
 * @param {string} separator character separator to between each string
 * @returns a string composed for all strings
 */
export function join(
  stringArray: Array<string | undefined> = [],
  separator = ' ',
) {
  return stringArray.filter((s) => !!s).join(separator);
}
