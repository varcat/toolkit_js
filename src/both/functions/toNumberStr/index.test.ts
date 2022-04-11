import { toNumberStr } from ".";

describe("toNumberStr", () => {
  test("toNumberStr", () => {
    expect(toNumberStr("1")).toBe("1");
    expect(toNumberStr("RMB100.00")).toBe("100");
    expect(toNumberStr("-RMB100,000,112.33")).toBe("-100000112.33");
    expect(toNumberStr("")).toBe("0");
    expect(toNumberStr([])).toBe("0");
    expect(toNumberStr([1])).toBe("1");
    expect(toNumberStr([1, "2", ".", "3"])).toBe("12.3");
    expect(toNumberStr([1, "2", ".-", "3"])).toBe("12.3");
    expect(toNumberStr(undefined as unknown as any)).toBe("0");
    expect(toNumberStr(false)).toBe("0");
    expect(toNumberStr(true)).toBe("1");
    expect(toNumberStr("-3.10")).toBe("-3.1");
    expect(toNumberStr("-3.-10")).toBe("-3.1");
    expect(toNumberStr("--1..01")).toBe("1.01");
    expect(toNumberStr(".asdf00")).toBe("0");
  });
});
