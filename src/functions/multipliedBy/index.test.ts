import { multipliedBy } from "./index";
import { toNumberStr } from "../toNumberStr";

describe("multipliedBy", () => {
  test("normal", () => {
    expect(multipliedBy("0.100", "0.2")).toEqual("0.02");
    expect(multipliedBy("1", "1")).toEqual("1");
    expect(multipliedBy("0.1", "0.2")).toEqual("0.02");
    expect(multipliedBy("0.1", "-0.2")).toEqual("-0.02");
    expect(multipliedBy("0.2", "-0.1")).toEqual("-0.02");
    expect(multipliedBy("-0.2", "-0.1")).toEqual("0.02");
    expect(multipliedBy("0.0000000001", "1.20000")).toEqual("0.00000000012");
    expect(multipliedBy("99999999999999999999999", "1")).toEqual(
      "99999999999999999999999"
    );
    expect(multipliedBy("99999999999999999999999", "33")).toEqual(
      "3299999999999999999999967"
    );
    expect(multipliedBy("3", "4")).toEqual("12");
    expect(multipliedBy(3, 4)).toEqual("12");
    expect(multipliedBy(toNumberStr(".1"), toNumberStr("19,000.2"))).toEqual(
      "1900.02"
    );
  });
});
