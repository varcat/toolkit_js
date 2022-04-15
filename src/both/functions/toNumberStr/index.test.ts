import { toNumberStr } from ".";

describe("toNumberStr", () => {
  test("整数测试", () => {
    expect(toNumberStr("1")).toBe("1");
    expect(toNumberStr("011")).toBe("11");
    expect(toNumberStr("0000")).toBe("0");
  });
  test("浮点数测试", () => {
    expect(toNumberStr("-3.10")).toBe("-3.1");
    expect(toNumberStr("0.01")).toBe("0.01");
    expect(toNumberStr("0.000")).toBe("0");
    expect(toNumberStr(".1")).toBe("0.1");
    expect(toNumberStr(".01")).toBe("0.01");
    expect(toNumberStr("-.01")).toBe("-0.01");
  });
  test("合法格式化数字测试", () => {
    expect(toNumberStr("1,999,120.001")).toBe("1999120.001");
    expect(toNumberStr("1,999,120.0010")).toBe("1999120.001");
    expect(toNumberStr("--1,999,120.0010")).toBe("1999120.001");
    expect(toNumberStr("---1,999,120.0010")).toBe("-1999120.001");
    expect(toNumberStr("-+1,999,120.0010")).toBe("-1999120.001");
    expect(toNumberStr("+-1,999,120.0010")).toBe("-1999120.001");
    expect(toNumberStr("++1,999,120.0010")).toBe("1999120.001");
  });
  test("非法格式测试", () => {
    expect(toNumberStr("RMB100.00")).toBe("100");
    expect(toNumberStr("-RMB100,000,112.33")).toBe("-100000112.33");
    expect(toNumberStr("")).toBe("0");
    expect(toNumberStr("-3.-10")).toBe("-3.1");
    expect(toNumberStr("--1..01")).toBe("1.01");
    expect(toNumberStr(".asdf00")).toBe("0");
    expect(toNumberStr("-+1,999.1200")).toBe("-1999.12");
    expect(toNumberStr("-+.180")).toBe("-0.18");
    expect(toNumberStr("-1.")).toBe("-1");
  });
  test("非法类型测试", () => {
    expect(toNumberStr([])).toBe("0");
    expect(toNumberStr([1])).toBe("1");
    expect(toNumberStr([1, "2", ".", "3"])).toBe("12.3");
    expect(toNumberStr([1, "2", ".-", "3"])).toBe("12.3");
    expect(toNumberStr(undefined as unknown as any)).toBe("0");
    expect(toNumberStr(false)).toBe("0");
    expect(toNumberStr(true)).toBe("1");
    expect(toNumberStr({} as unknown as any)).toBe("0");
    expect(toNumberStr({ a: 1 } as unknown as any)).toBe("1");
  });
});
