import { mergeObjects } from "./index";

describe("mergeObjects", () => {
  it("should merge two objects", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const obj3 = { name: "xxx" };
    const merged = mergeObjects(obj1, obj2, obj3);
    expect(merged).toEqual({ a: 1, b: 3, c: 4, name: "xxx" });
  });
});
