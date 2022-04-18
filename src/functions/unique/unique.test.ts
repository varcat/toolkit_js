import { unique } from "./unique";

describe("测试unique", () => {
  test(`[1, 1, 3] 去重后应为 [1, 2]`, () => {
    expect(unique([1, 1, 2])).toEqual([1, 2]);
  });

  test(`[{id: 1}, {id: 2}, {id: 1}, {id: 2}] 去重后应为 [{id: 1}, {id: 2}]`, () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 2 }];
    expect(unique(arr, "id")).toEqual([{ id: 1 }, { id: 2 }]);
  });

  test(`unique配合prop进行去重`, () => {
    const arr = [
      { info: { id: 1 } },
      { info: { id: 2 } },
      { info: { id: 1 } },
      { info: { id: 2 } },
    ];
    expect(unique(arr, "info.id")).toEqual([
      { info: { id: 1 } },
      { info: { id: 2 } },
    ]);
    expect(unique(arr, ["info", "id"])).toEqual([
      { info: { id: 1 } },
      { info: { id: 2 } },
    ]);
    expect(unique(arr, ["info"])).toEqual([
      { info: { id: 1 } },
      { info: { id: 2 } },
      { info: { id: 1 } },
      { info: { id: 2 } },
    ]);
  });

  test(`property 为函数的去重`, () => {
    const arr = [
      { info: { id: 1 } },
      { info: { id: 2 } },
      { info: { id: 3 } },
      { info: { id: 2 } },
    ];
    expect(unique(arr, (x) => x.info.id)).toEqual([
      { info: { id: 1 } },
      { info: { id: 2 } },
      { info: { id: 3 } },
    ]);
  });
});
