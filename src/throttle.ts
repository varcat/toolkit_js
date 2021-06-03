import { isExist } from "./isExist";

interface IThrottleOpts {
  leading?: boolean;
  trailing?: boolean;
}

interface IThrottledMethods {
  cancel: () => void;
}

export function throttle<T extends Function>(
  fn: T,
  wait: number = 100,
  opts: IThrottleOpts = {}
): IThrottledMethods & T {
  let leading = opts.leading ?? true;
  const trailing = opts.trailing ?? true;

  let globalArgs: any[];
  let timerId: any;
  let canceled = false;
  let lastExec = 0;
  let result: any;

  function cancel(): void {
    canceled = true;
    clearTimeout(timerId);
    timerId = null;
  }

  function throttled(...args: any[]) {
    const now = Date.now();
    if (canceled) return;

    function exec() {
      lastExec = Date.now();
      result = fn(...args);
    }

    if (isExist(timerId)) return;

    timerId = setTimeout(() => {
      exec();
      timerId = null;
    }, wait);

    return result;
  }

  throttled.cancel = cancel;

  return throttled as unknown as IThrottledMethods & T;
}

// window.throttle = function (func, wait, options) {
//   var timeout, context, args, result;
//   var previous = 0;
//   if (!options) options = {};
//
//   var later = function () {
//     previous = options.leading === false ? 0 : _.now();
//     timeout = null;
//     result = func.apply(context, args);
//     if (!timeout) context = args = null;
//   };
//
//   var throttled = function () {
//     var now = _.now();
//     if (!previous && options.leading === false) previous = now;
//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;
//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//       }
//       previous = now;
//       result = func.apply(context, args);
//       if (!timeout) context = args = null;
//     } else if (!timeout && options.trailing !== false) {
//       timeout = setTimeout(later, remaining);
//     }
//     return result;
//   };
//
//   throttled.cancel = function () {
//     clearTimeout(timeout);
//     previous = 0;
//     timeout = context = args = null;
//   };
//
//   return throttled;
// };
