import { throttle } from "./throttle";

interface IDebounceOpts {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

export function debounce<T extends Function>(
  func: T,
  wait: number,
  opts: IDebounceOpts = {}
): T {
  return throttle(func, wait, {
    leading: opts.leading,
    trailing: opts.trailing,
    maxWait: 0,
  }) as unknown as T;
}
