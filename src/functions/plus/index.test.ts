import { plus } from "./index";
import { toNumberStr } from "../toNumberStr";

describe("plus", () => {
  test("normal", () => {
    expect(plus("1", "1")).toEqual("2");
    expect(plus("0.1", "0.2")).toEqual("0.3");
    expect(plus("0.1", "-0.2")).toEqual("-0.1");
    expect(plus("0.2", "-0.1")).toEqual("0.1");
    expect(plus("-0.2", "-0.1")).toEqual("-0.3");
    expect(plus("0.100", "0.2")).toEqual("0.3");
    expect(plus("0.0000000001", "1.20000")).toEqual("1.2000000001");
    expect(plus("99999999999999999999999", "1")).toEqual(
      "100000000000000000000000"
    );
  });

  test("配合toNumberStr", () => {
    expect(plus(toNumberStr(".1"), toNumberStr("19,000.2"))).toEqual("19000.3");
  });
});
