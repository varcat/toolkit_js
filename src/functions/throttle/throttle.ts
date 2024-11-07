import { isNil } from "../isNil";

// #region IThrottleOpts
interface IThrottleOpts {
  // default: false 开始时是否调用函数
  leading?: boolean;
  // default: true 结束时是否调用函数
  trailing?: boolean;
  // default: wait 为0则开始到结束之间的事件不调用函数
  maxWait?: number;
}
// #endregion IThrottleOpts

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

    if (isNil(lastInvokeTime)) {
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
