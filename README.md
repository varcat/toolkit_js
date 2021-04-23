# toolkit

Commonly used functions.

## Usage

```npm
npm i wsp-toolkit
```

```javascript
// browser
import { isExist } from "wsp-toolkit";

// node
const { typeOf } = require("wsp-toolkit");
```

## API

- [addition](#wsp-toolkit-addition)
- [currying](#wsp-toolkit-currying)
- [identity](#wsp-toolkit-identity)
- [isEmpty](#wsp-toolkit-isEmpty)
- [isExist](#wsp-toolkit-isExist)
- isNumber
- isSafeNumber
- sleep
- toArray
- toNumber
- typeOf
- unique
- LinkedList

---

### <a id="wsp-toolkit-addition">addition</a>

```javascript
addition(1, 2, 3) // 6
addition([1, 2, 3, 4]) // 10
addition(1, 2, [7, 10]) // 20
```

### <a id="wsp-toolkit-currying">currying</a>
```typescript
function add(l: number, r: number): number {
  return l + r;
}
const curryFn = currying(add);
curryFn(1, 2) // 3
curryFn(1)(2) // 3
curryFn()(1)(2) // 3
```

### <a id="wsp-toolkit-identity">identity</a>
```javascript
identity(null) // null
identity(1) // 1
identity({a: 1}) // {a: 1}
```
### <a id="wsp-toolkit-isEmpty">isEmpty</a>
```javascript
isEmpty('') // true
isEmpty('  ') // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty(new Map()) // true
isEmpty(new Set()) // true
isEmpty(() => {}) // false
isEmpty(0) // false
```
### <a id="wsp-toolkit-isExist">isExist</a>
```javascript
isExist(null) // false
isExist(undefined) // false
isExist(0) // true
isExist('') // true
isExist([]) // true
isExist([1,2,3]) // true
```
