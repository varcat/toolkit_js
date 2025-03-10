export function isNil(x: any): x is null | undefined {
  return x === null || x === undefined;
}
