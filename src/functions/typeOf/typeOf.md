# typeOf(x)

内部使用`Object.prototype.toString.call`获取类型

## 入参

| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| x    | any  | 是   | -    |

## 返回

## 示例

```javascript
typeOf(""); // String
typeOf(0); // Number
typeOf(NaN); // Number
typeOf(Infinity); // Number
typeOf(Symbol); // Function
typeOf(Symbol("wsp")); // Symbol
typeOf([]); // Array
typeOf({}); // Object
typeOf(new Map()); // Map
typeOf(new FormData()); // FormData
```
