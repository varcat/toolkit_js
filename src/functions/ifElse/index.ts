export const ifElse = <T = any, Result = any>(
  condition: (arg: T) => boolean,
  onTrue: (arg: T) => Result,
  onFalse: (arg: T) => Result
) => {
  return (arg: T) => {
    if (condition(arg)) {
      return onTrue(arg);
    } else {
      return onFalse(arg);
    }
  };
};
