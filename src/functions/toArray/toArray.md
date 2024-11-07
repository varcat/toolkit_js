# toArray(x)

将类数组或基础数据类型转为数组

## 示例

```javascript
toArray("abc"); // ['a', 'b', 'c']
toArray([]); // []
toArray(null); // []
toArray(undefined); // []
toArray({ length: 2 }); // [undefined, undefined]
toArray(document.querySelectorAll("div")); // NodeList: [div, div]
toArray(0); // [0]
toArray(false); // [false]
toArray(new Set([1, 2])); // [1, 2]
```
