import { pipe } from "./pipe";

test("pipe", () => {
  const res = pipe(
    (str: string, count: number) => str.repeat(count),
    (str: string) => str.toUpperCase()
  )("a", 2);
  expect(res).toBe("AA");
});
