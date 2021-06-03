import { isExist } from "./isExist";

interface IDebounceMethods {
  cancel: () => void;
}

interface IDebounceOpts {
  leading?: boolean;
  maxWait?: number;
}

export function debounce<T extends Function>(
  func: T,
  wait: number,
  opts: IDebounceOpts = {}
): T & IDebounceMethods {
  let timerId: any;
  const leading = opts.leading ?? false;
  const maxWait = opts.maxWait;
  let startRunTime: DOMTimeStamp;
  let isRunning = false;

  function debounced(...args: any[]) {
    function invokeFn() {
      isRunning = false;
      startRunTime = Date.now();
      func(...args);
    }

    function startTimer() {
      if (!isRunning) {
        startRunTime = Date.now();
      }
      isRunning = true;
      timerId = setTimeout(() => {
        invokeFn();
      }, wait);
    }

    const now = Date.now();

    if (leading && !isExist(timerId)) {
      invokeFn();
      startTimer();
    } else {
      clearTimeout(timerId);
      if (isRunning && isExist(maxWait) && now - startRunTime > maxWait!) {
        invokeFn();
      }
      startTimer();
    }
  }

  debounced.cancel = () => {
    clearTimeout(timerId);
    timerId = null;
  };

  return debounced as unknown as T & IDebounceMethods;
}
