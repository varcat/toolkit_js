Array.concat与Array.map的合并操作

```typescript
const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

concatMap((x) => x * 10, arr1, arr2); // [10, 20, 30, 100, 200, 300]
```
