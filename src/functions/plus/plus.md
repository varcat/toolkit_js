任意大数,保证精确的加法，内部使用[Bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)实现，需自行评估兼容性

v0.6后将移除，请使用[bignumber.js](https://www.npmjs.com/package/bignumber.js)

```typescript
type plus = (a: string, b: string) => string;

plus('0.1', '0.2'); // '0.3'

// 针对非法数字字符串，可以使用 toNumberStr
plus(toNumberStr('.1'), toNumberStr('19,000.2')); // '19000.3'
```
