import { isEmpty } from "./isEmpty";

describe("test isEmpty function", () => {
  test('"" is empty', () => {
    expect(isEmpty("")).toBe(true);
  });

  test("[] is empty", () => {
    expect(isEmpty([])).toBe(true);
  });

  test("0 不是empty", () => {
    expect(isEmpty(0)).toBe(false);
  });

  test("function 不是empty", () => {
    const fn = () => {};
    expect(isEmpty(fn)).toBe(false);
  });

  test("all", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new FormData())).toBe(true);
    const f = new FormData();
    f.append("t", "1");
    expect(isEmpty(f)).toBe(false);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });
});

