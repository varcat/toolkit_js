# pipe(...fn)

管道函数，参考[管道运算符](https://es6.ruanyifeng.com/#docs/proposals#%E7%AE%A1%E9%81%93%E8%BF%90%E7%AE%97%E7%AC%A6)

## 入参

| 参数 | 类型         | 必填 | 说明 |
| :--- | :----------- | :--- | :--- |
| fn   | (any) => any | 是   | -    |

## 返回

| 类型         | 说明                         |
| :----------- | :--------------------------- |
| (any) => any | 由所有传递的函数组成的新函数 |

## 示例

```typescript
// 重复字符串指定次数
const repeatStr = (str: string, count: number) => str.repeat(count);
// 将所有字符大写
const upperCase = (str: string) => str.toUpperCase();
// 通过 pipe 组合一个新函数
const repeatAndUpperCase = pipe(repeatStr, upperCase);
// 新函数将依次执行 重复字符、字符大写 操作并返回结果
repeatAndUpperCase("a", 2); // "AA"
```
