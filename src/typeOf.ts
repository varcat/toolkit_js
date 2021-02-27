export interface ITypeOfParams {
  fullName: boolean;
}

export function typeOf(x: any, {fullName = false} = {} as ITypeOfParams): string {
  const type = Object.prototype.toString.call(x);
  if (fullName) {
    return type
  }
  return type.replace(/\[\w+ (\w+)]/, '$1');
}
