
确保精确的乘法，内部使用[Bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)实现，需自行评估兼容性

v0.6后将移除，请使用[bignumber.js](https://www.npmjs.com/package/bignumber.js)

```typescript
multipliedBy('1', '2') // 2
multipliedBy('0.1', '0.2') // 0.02
```
