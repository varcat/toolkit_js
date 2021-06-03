import { isExist } from "./isExist";
import { notExist } from "./notExist";

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

  function shouldInvoke(time: DOMTimeStamp): boolean {
    if (notExist(maxWait)) return false;
    if (lastCallTime && time - lastCallTime! > maxWait!) return true;
    if (lastInvokeTime && time - lastInvokeTime! > maxWait!) return true;
    return false;
  }

  function cancel() {
    clearTimeout(timerId);
    timerId = null;
    lastCallTime = null;
    lastInvokeTime = null;
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

  debounced.cancel = cancel;

  return debounced as unknown as T & IDebounceMethods;
}
