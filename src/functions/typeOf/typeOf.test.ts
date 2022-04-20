import { typeOf } from "./typeOf";

describe("typeOf.ts", () => {
  test("{} typeof Object", () => {
    expect(typeOf({})).toBe("Object");
  });

  test(`[] typeof Array`, () => {
    expect(typeOf([])).toBe("Array");
  });

  test(`Symbol typeof Symbol`, () => {
    const s = Symbol("test");
    expect(typeOf(s)).toBe("Symbol");
    expect(typeOf(Symbol)).toBe("Function");
  });

  test(`undefined typeof Undefined`, () => {
    expect(typeOf(undefined)).toBe("Undefined");
    // @ts-ignore
    expect(typeOf()).toBe("Undefined");
  });

  test("typeOf", () => {
    expect(typeOf(null)).toBe("Null");
    expect(typeOf(0)).toBe("Number");
    expect(typeOf(NaN)).toBe("Number");
    expect(typeOf(Infinity)).toBe("Number");
    expect(typeOf(new Set())).toBe("Set");
    expect(typeOf(new Map())).toBe("Map");
    expect(typeOf(new FormData())).toBe("FormData");
    expect(typeOf(new URLSearchParams())).toBe("URLSearchParams");
    expect(typeOf(() => {})).toBe("Function");
    expect(typeOf(true)).toBe("Boolean");
  });
});
