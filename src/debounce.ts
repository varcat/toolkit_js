interface IDebounceOpts {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}

export function debounce(
  func: Function,
  wait: number,
  options: IDebounceOpts = {}
) {
  function debounced(...args: any[]) {}
  return debounced;
}
