import { treeEach } from "./index";

describe("treeEach", () => {
  test("normal", () => {
    const tree1 = [
      null,
      {
        name: "1",
        children: [
          { name: "1.1", children: null },
          { name: "1.2", children: [{name: '1.2.1'}] },
          {
            name: "1.3",
            children: [
              {
                name: "1.3.1"
              },
              {
                name: "1.3.2"
              }
            ]
          }
        ]
      },
      {
        name: '2',
        children: [
          {
            name: '2.1'
          }
        ]
      }
    ];

    let strArr: string[] = [];
    treeEach(tree1, (x) => {
      if (!x) return x;
      strArr.push(x.name);
      return x;
    });
    expect(strArr.join('/')).toEqual('1/1.1/1.2/1.2.1/1.3/1.3.1/1.3.2/2/2.1');

    let strArr2: string[] = [];
    treeEach(tree1, (x) => {
      if (!x) return x;
      strArr2.push(x.name);
      return x;
    }, {startLeaf: true});
    expect(strArr2.join('/')).toEqual('1.1/1.2.1/1.2/1.3.1/1.3.2/1.3/1/2.1/2');
  });
});
