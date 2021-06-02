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
  let timerId: any;
  let canceled = false;
  let leading = opts.leading ?? true;
  const trailing = opts.trailing ?? true;
  let lastExec = 0;

  function throttled(...args: any[]) {
    if (canceled) return;

    function exec() {
      lastExec = Date.now();
      fn(...args);
    }

    function cancel(): void {
      canceled = true;
      clearTimeout(timerId);
    }

    if (isExist(timerId)) return;

    timerId = setTimeout(() => {
      exec();
      timerId = null;
    }, wait);
  }

  return throttled as unknown as IThrottledMethods & T;
}
