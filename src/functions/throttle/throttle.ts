import { notExist } from "../notExist/notExist";

interface IThrottleOpts {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

export function throttle<T extends Function>(
  fn: T,
  wait: number,
  opts: IThrottleOpts = {}
): T {
  const { maxWait = wait, leading = false, trailing = true } = opts || {};

  let timerId: any;
  let lastInvokeTime: number | null = null;

  function reset() {
    timerId = null;
    lastInvokeTime = null;
  }

  function throttled(...args: any[]) {
    clearTimeout(timerId);
    const now = Date.now();

    if (notExist(lastInvokeTime)) {
      if (leading) {
        fn(...args);
      }
      lastInvokeTime = now;
    }
    if (now - lastInvokeTime! >= maxWait && maxWait !== 0) {
      lastInvokeTime = now;
      fn(...args);
    } else {
      timerId = setTimeout(() => {
        reset();
        if (!trailing) return;
        fn(...args);
      }, wait);
    }
  }

  return throttled as unknown as T;
}
