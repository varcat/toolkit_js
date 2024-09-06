type Result =
  | "Object"
  | "Array"
  | "Function"
  | "Symbol"
  | "Undefined"
  | "Null"
  | "Number"
  | "Set"
  | "Map"
  | "FormData"
  | "URLSearchParams"
  | "Boolean"
  | "AsyncFunction"
  | "String"
  | string;

export function typeOf(x: any): Result {
  const type = Object.prototype.toString.call(x);
  return type.replace(/\[\w+ (\w+)]/, "$1") as Result;
}

