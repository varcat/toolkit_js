export async function promiseTry<ValueType, ArgumentsType extends unknown[]>(
  func: (...args: ArgumentsType) => PromiseLike<ValueType> | ValueType,
  ...args: ArgumentsType
): Promise<ValueType> {
  return new Promise((resolve) => {
    resolve(func(...args));
  });
}
