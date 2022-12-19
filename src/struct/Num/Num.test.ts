import { Num } from "./Num";

describe("Num", () => {
  test("", () => {
    expect(Num.add("0.1", 0.2)).toBe("0.3");
    expect(Num.subtract("0.1", 0.2)).toBe("-0.1");
  });
});
