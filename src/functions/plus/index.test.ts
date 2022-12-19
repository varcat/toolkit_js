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
    expect(plus("0.1", "0.01")).toEqual("0.11");
    expect(plus("-0.1", "0.09")).toEqual("-0.01");
    expect(plus("0.1", "-0.09")).toEqual("0.01");
    expect(plus("-0.1", "1.009")).toEqual("0.909");
    expect(plus("0.0000000001", "1.20000")).toEqual("1.2000000001");
    expect(plus("99999999999999999999999", "1")).toEqual(
      "100000000000000000000000"
    );
  });

  test("multi", () => {
    expect(
      ["0.01", "3366.16", "3366.15", "3366.15", "3366.15", "6732.26"].reduce(
        (res, x, i) => {
          expect(res).toEqual(
            ["0", "0.01", "3366.17", "6732.32", "10098.47", "13464.62"][i]
          );
          return plus(res, x);
        },
        "0"
      )
    ).toEqual("20196.88");
  });

  test("配合toNumberStr", () => {
    expect(plus(toNumberStr(".1"), toNumberStr("19,000.2"))).toEqual("19000.3");
  });
});
