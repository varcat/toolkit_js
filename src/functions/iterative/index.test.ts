import { isExist } from "../isExist/isExist";
import { iterative } from "./index";

test("iterative", () => {
  expect(iterative(isExist)([1, 2, 3])).toEqual([true, true, true]);
});
