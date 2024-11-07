import { at } from "./at";

describe("at", () => {
  test("normal", () => {
    const xs = [0, 1, 2, 3];
    const first = at(0);
    const x = first(xs);
    expect(x).toBe(0);
    expect(at(-1)(xs)).toBe(3);
    expect(at(1)(xs)).toBe(1);
    expect(at(-4)(xs)).toBe(0);
    expect(at(-10)(xs)).toBe(undefined);
  });
});
