将只支持单个参数的函数转变为可支持多个入参的函数

```typescript
// isExist 只能判断一个入参
isExist(null); // false
const isExists = iterative(isExist);
isExists([ null, 1, {} ]); // [ false, true, true ]
```
