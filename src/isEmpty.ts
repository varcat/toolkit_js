import {isExist} from "./index";

export function isEmpty(x: number | string | Array<any> | object | null | undefined | Set<any> | Map<any, any>): boolean {
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
    if ((x as Set<any>)[Symbol.toStringTag] === 'Set') {
        return (x as Set<any>).size === 0;
    }
    if ((x as Map<any, any>)[Symbol.toStringTag] === 'Map') {
        return (x as Map<any, any>).size === 0;
    }
    return false;
}
