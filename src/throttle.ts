import { debounce } from "./debounce";

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
): T & IThrottledMethods {
  return debounce(fn, wait, {
    maxWait: wait,
    leading: opts.leading ?? true,
    trailing: opts.trailing ?? false,
  });
}
