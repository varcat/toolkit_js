export function addition(...numbers: number[]): number {
  let result = 0;

  function add(xs: number[]) {
    for (let i = 0; i < xs.length; i += 1) {
      if (typeof xs[i] === "number") {
        result += xs[i];
      } else if (Array.isArray(xs[i])) {
        add(xs[i] as unknown as number[]);
      }
    }
  }
  add(numbers);

  return result;
}
