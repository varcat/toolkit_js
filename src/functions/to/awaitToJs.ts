//拷贝于 https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts  @wumusenlin 2022-04-14  这是await to js 的源码，使用请参照其gihub地址
//其目的是使你可以更优雅的在请求的时候处理错误数据 ex： const [err,data] = await to(fetchData());if(err) return
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }

      return [err, undefined];
    });
}
