export function toggle<T, Args>(fns: Array<(args?: Args) => T>) {
  const endIndex = fns.length - 1;
  let crtIndex = 0;
  return function (args?: Args) {
    const fn = fns[crtIndex];
    crtIndex += 1;
    if (crtIndex > endIndex) {
      crtIndex = 0;
    }
    return fn(args);
  }
}
