import { Num } from "./Num";

describe("Num", () => {
  test("", () => {
    expect(Num.add("0.1", 0.2)).toBe("0.3");
    expect(Num.sub("0.1", 0.2)).toBe("-0.1");
  });
});
