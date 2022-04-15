import { toggle } from "./toggle";

test("toggle", () => {
  const toggleStatus = toggle([() => "one", () => "two", () => "three"]);
  expect(toggleStatus()).toBe("one");
  expect(toggleStatus()).toBe("two");
  expect(toggleStatus()).toBe("three");
  expect(toggleStatus()).toBe("one");

  const toggleStatus2 = toggle(["one", "two", "three"]);
  expect(toggleStatus2()).toBe("one");
  expect(toggleStatus2()).toBe("two");
  expect(toggleStatus2()).toBe("three");
  expect(toggleStatus2()).toBe("one");
});
