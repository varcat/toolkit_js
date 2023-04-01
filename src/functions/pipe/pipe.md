管道函数，js[管道运算符](https://es6.ruanyifeng.com/#docs/proposals#%E7%AE%A1%E9%81%93%E8%BF%90%E7%AE%97%E7%AC%A6)

```typescript
const repeatStr = (str: string, count: number) => str.repeat(count);
const upperCase = (str: string) => str.toUpperCase();

const repeatAndUpperCase = pipe(
  repeatStr,
  upperCase,
);
repeatAndUpperCase("a", 2); // "AA"
```
