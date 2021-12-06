import { propStrToList } from "./propStrToList";

test("propStrToList", () => {
  expect(propStrToList("a.b.c")).toEqual(["a", "b", "c"]);
  expect(propStrToList("a.b[1]")).toEqual(["a", "b", 1]);
  expect(propStrToList(`a.b["a.b"]`)).toEqual(["a", "b", "a.b"]);
  expect(propStrToList(`a.b[a.b]`)).toEqual(["a", "b", "a.b"]);
  expect(propStrToList(`a.b.c[1].b`)).toEqual(["a", "b", "c", 1, "b"]);
  expect(() => propStrToList(`a.b[`)).toThrowError("括号不匹配");
  expect(() => propStrToList(`a.b]`)).toThrowError("Unexpected token ']'");
  expect(() => propStrToList(`]`)).toThrowError("Unexpected token ']'");
  expect(() => propStrToList(`[]]`)).toThrowError("Unexpected token ']'");
  expect(propStrToList(`["]"]`)).toEqual(["]"]);
  expect(propStrToList(`[a.b]`)).toEqual(["a.b"]);
});
