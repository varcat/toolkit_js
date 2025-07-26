export function mergeObjects<T extends object>(objects: T[]): T {
  const result: T = {} as T;
  for (const obj of objects) {
    Object.assign(result, obj);
  }
  return result;
}