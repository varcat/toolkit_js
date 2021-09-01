import { get } from "./index";

test("get", () => {
  const testObj = {
    success: false,
    name: "testObj",
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
      },
    ],
  };
  expect(get(testObj, ["children", 0, "name"])).toBe("children-1");
  expect(get(testObj, ["children", 0, "title"])).toBe(null);
  expect(get(testObj, ["children", 0, "title", "bar"])).toBe(undefined);
  expect(get(testObj, ["children", 0, "title", "bar"], "defaultValue")).toBe(
    "defaultValue"
  );
  expect(get(testObj, ["not exist key", "foo", "bar", "buz"])).toBe(undefined);
  expect(get(testObj, "children[1].name")).toBe("children-2");
  expect(get(testObj, "_pid['x.s'][1]")).toBe(2);
});
