```javascript
toNumber(100) // 100
toNumber('10,000') // 10000
toNumber('-870,123,001.20') // 870123001.2
toNumber(null) // 0
toNumber(null, {defaultValue: 100}) // 100
toNumber(NaN, {defaultValue: 100}) // 100
toNumber(0, {defaultValue: 100}) // 0
```
