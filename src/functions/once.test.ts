import { once } from "./once";

test("once", () => {
  const arr: number[] = [];
  function push(x: number): number {
    return arr.push(x);
  }

  const oncePush = once(push);
  oncePush(1);
  oncePush(2);
  oncePush(3);
  expect(arr).toEqual([1]);
});
