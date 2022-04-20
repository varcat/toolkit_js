# API <!-- {docsify-ignore} -->

## addition
将给定多维数字数组进行合计，非数字会调用[toNumber](#toNumber)尝试转换
```javascript
addition(1, 2, 3) // 6
addition([1, 2, 3, 4]) // 10
addition(1, 2, [7, 10]) // 20
addition([1, 2], [[7, 10]]) // 20
```

## and

```javascript
and(1, 0) // false
and(1, 0 !== null) // true
```

## ~~awaitToJs~~

`version >= 0.6`后将移除，请使用[to](#to)

## concatMap

Array.concat与Array.map的合并操作

```typescript
const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

concatMap((x) => x * 10, arr1, arr2); // [10, 20, 30, 100, 200, 300]
```

## currying
柯里化：把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数
```typescript
function add(l: number, r: number): number {
  return l + r;
}

const curryAdd = currying(add);
curryAdd(1, 2) // 3
curryAdd(1)(2) // 3
curryAdd()(1)(2) // 3
```

## debounce
防抖：
```typescript
interface IOpts {
  leading?: boolean; // default: false 开始时是否调用函数
  trailing?: boolean; // default: true 结束时是否调用函数
}
type debounce<T extends Function> = (
    // 需要防抖的函数
    func: T,

    // 防抖时间
    wait: number,

    // 额外配置，参见上方 IOpts
    options?: IOpts
) => T;
```

## get

```typescript
const obj = { name: 'wsp', dept: { id: 1, name: 'dept', members: [ { name: 'n1' }, { name: 'n2' } ] } };

get(obj, `dept.id`); // 1
get(obj, `dept.members[0].name`); // 'n1';
get(obj, `dept.members.0.name`); // 'n1';
// 支持数组
get(obj, ["dept", "members", 0, "name"]); // 'n1';
// 获取不存在的属性
get(obj, `aa.bb.cc.dd`); // undefined
```

## identity

返回入参

```javascript
identity(null) // null
identity(1) // 1
identity({a: 1}) // {a: 1}
```

## isEmpty

判断入参是否为空
- `string`：`trim`后判断`length`是否为0
- `null || undefined`: 为空
- `number || NaN || Infinity`: 不为空
- 还支持判断`Array`, `Set`, `Map`, `FormData`, `Object`

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

## isExist

判断入参是否存在，仅`null || undefined`为`false`(不存在)

```javascript
isExist(null) // false
isExist(undefined) // false
isExist(0) // true
isExist('') // true
isExist([]) // true
isExist([1,2,3]) // true
```

## isIterable

判断是否可迭代，实现了`Symbol.iterator`接口

```typescript
isIterable([]); // true
```

## isNumber
```javascript
isNumber(0) // true
isNumber(NaN) // true
isNumber(Infinity) // true
isNumber('0') // false
isNumber([]) // false
```

## isSafeNumber
```javascript
isSafeNumber(NaN) // false
isSafeNumber(Infinity) // false
isSafeNumber(0) // true
isSafeNumber(Number.MIN_SAFE_INTEGER) // true
isSafeNumber(Number.MAX_SAFE_INTEGER) // true
```

## iterative
将只支持单个参数的函数转变为可支持多个入参的函数
```typescript
// isExist 只能判断一个入参
isExist(null); // false
const isExists = iterative(isExist);
isExists([ null, 1, {} ]); // [ false, true, true ]
```

## last

```typescript
const arr = [1, 2];
last(arr); // 2;
```

## matrixTo

将获取到Dom元素的transform字符串转换为
```typescript
type TTransformInfo = {
  x: number;
  y: number;
  scale: number;
  rotate: number;
};
```

## notExist
```javascript
notExist(null) // true
notExist(undefined) // true
notExist(0) // false
notExist('') // false
notExist({}) // false
```

## once

包装给定的入参函数，返回仅执行一次的函数

```typescript
const arr: number[] = [];
function push(x: number) {
  arr.push(x)
}
// 调用 oncePush 仅会触发一次
const oncePush = once(push);
oncePush(1);
oncePush(2);
oncePush(3);
arr; // [1]
```

## or

入参表达式或函数返回true，则or函数返回true，否则返回false

```javascript
or(0, 1, false) // true
or(null, undefined, 0, "") // false
or(() => false, undefined, 0, "") // false
```

## pipe

管道函数，js[管道运算符](https://es6.ruanyifeng.com/#docs/proposals#%E7%AE%A1%E9%81%93%E8%BF%90%E7%AE%97%E7%AC%A6)

```typescript
const repeatStr = (str: string, count: number) => str.repeat(count);
const upperCase = (str: string) => str.toUpperCase();

const repeatAndUpperCase = pipe(
  repeatStr,
  upperCase,
);
repeatAndUpperCase("a", 2); // "AA"
```

## prop
prop是currying化的[get](#get)
```typescript
const obj = { user: {name: 'n'} };
prop(`name.name`)(obj); // 'n'
```

## reduce
```typescript
const arr = [1, 2, 3, 4];
const addFn = (sum, n) => sum + n;
reduce(arr, addFn, 0); // 10
```

## safeLast

## sleep
```javascript
( async () => {
  // 其他代码
  await sleep(10_000); // 等待10s
  // 其他代码
})()
```

## splitIntegerDecimal

拆分整数与小数部分, 还可以配合[toNumberStr](#toNumberStr)使用

```typescript
splitIntegerDecimal("1"); // ["1", ""]
splitIntegerDecimal("100.00"); // ["100", "00"]
```

## throttle

节流函数

```typescript
interface IOpts {
  leading?: boolean; // default: false 开始时是否调用函数
  trailing?: boolean; // default: true 结束时是否调用函数
  maxWait?: number; // default: wait 为0则开始到结束之间的事件不调用函数
}
type debounce<T extends Function> = (
    // 需要节流的函数
    func: T,

    // 节流时间
    wait: number,

    // 额外配置参见 IOpts
    options?: IOpts
) => T;
```

## to

不使用try...catch... 优雅捕获Promise错误

```javascript
const queryFn = (id) => service.findUserById(id);

// 常规捕获错误
(async () => {
    this.loading = true;
    try {
      queryFn(1);
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
})();

// 使用 to 处理错误
(async () => {
  this.loading = true;
  const [err, data] = await to(queryFn(1));
  this.loading = false;
  if (err) console.error(e);
})();
```

## toArray
```javascript
toArray('abc') // ['a', 'b', 'c']
toArray([]) // []
toArray(null) // []
toArray(undefined) // []
toArray({length: 2}) // [undefined, undefined]
toArray(document.querySelectorAll('div')) // NodeList: [div, div]
toArray(0) // [0]
toArray(false) // [false]
toArray(new Set([1, 2])) // [1, 2]
```

## toggle

在给定状态或函数中切换

```typescript
const toggleStatus = toggle(["one", "two", () => "three"]);
toggleStatus(); // "one"
toggleStatus(); // "two"
toggleStatus(); // "three"
toggleStatus(); // "one"
```

## toNumber
```javascript
toNumber(100) // 100
toNumber('10,000') // 10000
toNumber('-870,123,001.20') // 870123001.2
toNumber(null) // 0
toNumber(null, {defaultValue: 100}) // 100
toNumber(NaN, {defaultValue: 100}) // 100
toNumber(0, {defaultValue: 100}) // 0
```

## toNumberStr
```typescript
toNumberStr(12); // "12"
toNumberStr("011"); // "11"
toNumberStr("-.100"); // "-0.1"
toNumberStr("0000"); // "0"
toNumberStr("1,999,120.001000"); // "1999120.001"
```

## typeOf

内部使用`Object.prototype.toString.call`获取类型

```javascript
typeOf('') // String
typeOf(0) // Number
typeOf(NaN) // Number
typeOf(Infinity) // Number
typeOf(Symbol) // Function
typeOf(Symbol('wsp')) // Symbol
typeOf([]) // Array
typeOf({}) // Object
typeOf(new Map()) // Map
typeOf(new FormData()) // FormData
```

## unique

去重

```javascript
// 基础类型去重
unique([1, 1, 3]); // [1, 3]

// 通过指定属性去重
arr = [{id: 1}, {id: 2}, {id: 1}, {id: 2}];
unique(arr, 'id'); // [{id: 1}, {id: 2}]

// 使用函数获取去重的属性值
arr = [{info: {id: 1}}, {info: {id: 2}}, {info: {id: 3}}, {info: {id: 2}}];
unique(arr, x => x.info.id);
// [
//   {info: {id: 1}},
//   {info: {id: 2}},
//   {info: {id: 3}},
// ]
```

## Vector

**ICoord**
```typescript
interface ICoord {
  x: number;
  y: number;
}
```

两种构造Vector的方式

**new Vector(p1: ICoord, p2: ICoord)**

**Vector.of(p: ICoord)**

```typescript
import {Vector} from "wsp-toolkit";

const v = Vector.of({x: 10, y: 0});
const v1 = Vector.of({x: 0, y: 10});
const v2 = new Vector({x: 0, y: 3}, {x: 4, y: 0});
```

**instance.getLength()**

获取向量长度

```typescript
v1.getLength() // 10
v2.getLength() // 5
```

**instance.getAngle(v: Vector)**

获取旋转角度

```typescript
v.getAngle(v1) // 90
v1.getAngle(v) // -90
```

**instance.getScale(v: Vector)**

获取缩放比例

```typescript
import {Vector} from "./Vector";

const v1 = Vector.of({x: 5, y: 0});
const v2 = Vector.of({x: 10, y: 0});
v1.getScale(v2); // 0.5
v2.getScale(v1); // 2
```

## zip

配对操作

```typescript
const a1 = [1, 3, 5];
const a2 = [1, 2, 3, 4, 5];
const a3 = [1, 2, 3, 4];
zip(a1, a2, a3);
// 输出 [
//   [1, 1, 1],
//   [3, 2, 2],
//   [5, 3, 3],
// ]
```

## zipWith

配对操作

```typescript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4];
const arr3 = [5, 5];
zipWidth((a, b) => a + b, arr1, arr2, arr3); // [ 7, 9 ]
```
