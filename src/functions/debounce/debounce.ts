import { throttle } from "../throttle/throttle";

// #region IDebounceOpts
interface IDebounceOpts {
  // default: false 开始时是否调用函数
  leading?: boolean;
  // default: true 结束时是否调用函数
  trailing?: boolean;
}
// #endregion IDebounceOpts

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
