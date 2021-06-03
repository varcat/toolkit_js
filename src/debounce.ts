import { isExist } from "./isExist";

interface IDebounceMethods {
  cancel: () => void;
}

interface IDebounceOpts {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

export function debounce<T extends Function>(
  func: T,
  wait: number,
  opts: IDebounceOpts = {}
): T & IDebounceMethods {
  const leading = opts.leading ?? false;
  const trailing = opts.trailing ?? true;
  const maxWait = opts.maxWait;

  let timerId: any;
  let lastCallTime: DOMTimeStamp | null = null;
  let lastInvokeTime: DOMTimeStamp | null = null;

  function shouldInvoke(time: DOMTimeStamp) {
    return (
      isExist(maxWait) &&
      ((lastCallTime && time - lastCallTime! > maxWait!) ||
        (lastInvokeTime && time - lastInvokeTime! > maxWait!))
    );
  }

  function debounced(...args: any[]) {
    function invokeFn(time: DOMTimeStamp) {
      lastInvokeTime = time;
      func(...args);
    }

    function startTimer(time: DOMTimeStamp) {
      return setTimeout(() => {
        if (!trailing) return;
        invokeFn(time);
      }, wait);
    }

    const now = Date.now();
    const isInvoking = shouldInvoke(now);
    lastCallTime = now;
    if (!lastInvokeTime) {
      lastInvokeTime = now;
    }

    if (leading && !isExist(timerId)) {
      invokeFn(now);
      timerId = startTimer(now);
    } else {
      clearTimeout(timerId);
      if (isInvoking) {
        invokeFn(now);
      }
      timerId = startTimer(now);
    }
  }

  debounced.cancel = () => {
    clearTimeout(timerId);
    timerId = null;
    lastCallTime = null;
    lastInvokeTime = null;
  };

  return debounced as unknown as T & IDebounceMethods;
}
