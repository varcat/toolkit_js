# zipWith

配对操作(参考[zip](/fn/zip/))，并对每一对进行 reduce 操作

## 示例

```typescript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4];
const arr3 = [5, 5];
zipWidth((a, b) => a + b, arr1, arr2, arr3); // [ 7, 9 ]
```
