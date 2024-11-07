# promiseTry(fn, ...arg)

使用方法同 [Promise.try()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/try)

## 入参

| 参数 | 类型                       | 必填 | 说明               |
| :--- | :------------------------- | :--- | :----------------- |
| func | (...any) => Promise\<any\> | 是   | -                  |
| arg  | any                        | 否   | 传递给 func 的参数 |

## 示例

<<< ./index.test.ts
