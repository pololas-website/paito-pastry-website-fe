/**
 * throttle a given function
 * @param {Function} fn
 * @param {number} delay in milliseconds.
 * @returns the throttled function ready to be used
 */
export function throttle(fn, delay) {
  let timeout;

  return function (...args) {
    if (!timeout) {
      fn(...args);

      timeout = setTimeout(() => {
        timeout = undefined;
      }, delay);
    }
  };
}

/**
 * Throttle a function with the option to cancel it before it will execute.
 * The function will be executed to the end of the delay parameter.
 * @param {Function} fn function to throttle
 * @param {number} delay in miliseconds
 * @returns an object with the throttled function and the cancel function
 */
export function throttleEndWithCancel(fn, delay) {
  let timeout;

  function throttled(...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, ...args);
        timeout = undefined;
      }, delay);
    }
  }

  const cancel = () => (timeout = clearTimeout(timeout));

  return { throttled, cancel };
}
