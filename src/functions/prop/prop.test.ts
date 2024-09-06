import { prop } from "./index";

describe("prop", () => {
  test("normal", () => {
    const s1 = Symbol("symbol1");
    const testObj = {
      success: false,
      name: "testObj",
      [s1]: "symbol1",
      _pid: {
        uid: 1,
        "x.s": [1, 2, 3],
      },
      children: [
        {
          name: "children-1",
          title: null,
        },
        {
          name: "children-2",
          [s1]: "children-2 s1",
        },
      ],
    };
    const arr = [1, 2, [3, 4, [5]]];
    expect(prop("children")(testObj)).toBe(testObj.children);
    expect(prop(["children", 0, "name"], testObj)).toBe("children-1");
    expect(prop("children[0].name", testObj)).toBe("children-1");
    expect(prop("children.0.name", testObj)).toBe("children-1");
    expect(prop(["children", 0, "title"], testObj)).toBe(null);
    expect(prop(["children", 0, "title", "bar"], testObj)).toBe(undefined);
    expect(prop(["children", 0, "title", "bar"], testObj)).toBe(undefined);
    expect(prop(["not exist key", "foo", "bar", "buz"])(testObj)).toBe(
      undefined
    );
    expect(prop("children[1].name")(testObj)).toBe("children-2");
    expect(prop("_pid['x.s'][1]", testObj)).toBe(2);
    expect(prop("_pid.'x.s'.[1]", testObj)).toBe(2);
    expect(prop("_pid.[x.s].[1]", testObj)).toBe(2);
    expect(prop("_pid[x.s][1]", testObj)).toBe(2);
    expect(prop(s1, testObj)).toBe("symbol1");
    expect(prop([s1], testObj)).toBe("symbol1");
    expect(prop(["children", 1, s1], testObj)).toBe("children-2 s1");
    expect(prop("2[2].0")(arr)).toBe(5);
  });
});
