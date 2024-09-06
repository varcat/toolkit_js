import { Num } from "./Num";

describe("Num", () => {
  test("", () => {
    expect(Num.plus("0.1", 0.2)).toBe("0.3");
    expect(Num.minus("0.1", 0.2)).toBe("-0.1");
  });
});

