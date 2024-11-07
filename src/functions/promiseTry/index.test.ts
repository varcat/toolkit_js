import { promiseTry } from "./index";

describe("promiseTry", () => {
  test("normal", () => {
    const reject = (n: number) => Promise.reject(n);
    const rejectSync = () => {
      throw new Error("err");
    };
    promiseTry(reject, 1).catch((x) => {
      expect(x).toBe(1);
    });
    promiseTry(rejectSync).catch((x) => {
      expect(x.message).toBe("err");
    });
  });
});
