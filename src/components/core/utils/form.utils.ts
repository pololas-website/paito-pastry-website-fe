/**
 * Used mainly for get the required functionality of the zod package valid with an input string.
 * Thus when the input element gets empty, the value sent to Zod will be undefined so that the
 * required validation will be fired.
 * @param value
 * @returns
 */
export function setEmptyStringAsUndefined(value: string) {
  return value ? value : undefined;
}

/**
 * Used to enable zod required-validation when provided the empty string to the schema.
 */
export const zodRequiredOption = {
  setValueAs: setEmptyStringAsUndefined,
};
