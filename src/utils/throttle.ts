/*
TODO:
Test these functions since the typing provided were not tested when migrated to Typescript.
*/

/**
 * throttle a given function
 * @param {Function} fn
 * @param {number} delay in milliseconds.
 * @returns the throttled function ready to be used
 */
export function throttle(fn: (...args: unknown[]) => void, delay: number) {
  let timeout: NodeJS.Timeout | undefined;

  return function (...args: unknown[]) {
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
export function throttleEndWithCancel(
  fn: (...args: unknown[]) => void,
  delay: number,
) {
  let timeout: NodeJS.Timeout | undefined;

  function throttled(...args: unknown[]) {
    if (!timeout) {
      timeout = setTimeout(() => {
        console.log('was executed');
        fn(args);
        timeout = undefined;
      }, delay);
    }
  }

  const cancel = () => (timeout = clearTimeout(timeout) as undefined);

  return { throttled, cancel };
}

/*
TODO:
Test this function with a real application and find a way to type this
since this is using an function.apply utility and needs a 'this context',
for the moment will be commented.
*/
/**
 * Throttle a function with the option to cancel it before it will execute.
 * The function will be executed to the end of the delay parameter.
 * @param {Function} fn function to throttle
 * @param {number} delay in miliseconds
 * @returns an object with the throttled function and the cancel function
 */
// export function throttleEndWithCancel(fn: (...args: unknown[]) => void, delay: number) {
//   let timeout: NodeJS.Timeout | undefined;

//   function throttled(...args: unknown[]) {
//     if (!timeout) {
//       timeout = setTimeout(() => {
//         fn.apply(this, args);
//         timeout = undefined;
//       }, delay);
//     }
//   }

//   const cancel = () => (timeout = clearTimeout(timeout) as undefined);

//   return { throttled, cancel };
// }
