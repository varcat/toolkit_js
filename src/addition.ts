
function add(xs: number[]) : number {
  return xs.reduce((sum, crt) => sum + crt);
}

export function addition(...numbers: number[]): number {
  if (numbers.length === 1) {
    if (Array.isArray(numbers[0])) {
      return add(numbers[0]);
    }
    return numbers[0];
  }
  return add(numbers.flat(Infinity));
}
