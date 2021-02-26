import {isExist} from "./index";

export function isEmpty(x: string): boolean;
export function isEmpty(x: Array<any>): boolean;
export function isEmpty(x: object): boolean;
export function isEmpty(x: null): boolean;
export function isEmpty(x: undefined): boolean;
export function isEmpty(x: Set<any>): boolean;
export function isEmpty(x: Map<any, any>): boolean;
export function isEmpty(x: number | string | Array<any> | object | null | undefined): boolean {
    if (!isExist(x)) return true;
    if (typeof x === 'number') {
        return x === 0;
    }
    if (typeof x === 'string') {
        return x.trim().length === 0
    }
    if (Array.isArray(x)) {
        return x.length === 0;
    }
    // @ts-ignore
    if (x[Symbol.toStringTag] === 'Set') {
        return (x as Set<any>).size === 0;
    }
    // @ts-ignore
    if (x[Symbol.toStringTag] === 'Map') {
        return (x as Map<any, any>).size === 0;
    }
    return false;
}
