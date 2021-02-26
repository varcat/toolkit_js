export function mustArray<T>(x: any): Array<T> {
    if (!Array.isArray(x)) return [];
    return x;
}
