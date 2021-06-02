import { throttle } from "./throttle";
import { sleep } from "./sleep";

test("throttle trailing", async () => {
  const arr: number[] = [];
  const push = throttle((x: number) => {
    arr.push(x);
  }, 100);
});
