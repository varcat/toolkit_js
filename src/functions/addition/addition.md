将给定多维数字数组进行合计，非数字会调用[toNumber](#toNumber)尝试转换
```javascript
addition(1, 2, 3) // 6
addition([1, 2, 3, 4]) // 10
addition(1, 2, [7, 10]) // 20
addition([1, 2], [[7, 10]]) // 20
```
