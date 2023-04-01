判断入参是否存在，仅`null || undefined`为`false`(不存在)

```javascript
isExist(null) // false
isExist(undefined) // false
isExist(0) // true
isExist('') // true
isExist([]) // true
isExist([1,2,3]) // true
```
