import { toNumberStr } from ".";

describe("toNumberStr", () => {
  test("toNumberStr", () => {
    expect(toNumberStr("1")).toBe("1");
    expect(toNumberStr("RMB100.00")).toBe("100.00");
    expect(toNumberStr("-RMB100,000,112.33")).toBe("-100000112.33");
    expect(toNumberStr("")).toBe("0");
    expect(toNumberStr([])).toBe("0");
    expect(toNumberStr([1])).toBe("1");
    expect(toNumberStr(undefined)).toBe("0");
    expect(toNumberStr(false)).toBe("0");
    expect(toNumberStr(true)).toBe("1");
  });
});
