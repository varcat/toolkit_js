入参表达式或函数返回true，则or函数返回true，否则返回false

```javascript
or(0, 1, false) // true
or(null, undefined, 0, "") // false
or(() => false, undefined, 0, "") // false
```
