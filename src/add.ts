export function add(...numbers: number[]): number {
  return numbers.reduce((sum, crt) => sum + crt);
}
