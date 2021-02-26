import {typeOf} from "./typeOf";

test('{} typeof Object', () => {
    expect(typeOf({}, {fullName: true})).toBe('[object Object]');
    expect(typeOf({})).toBe('Object');
});

test(`[] typeof Array`, () => {
    expect(typeOf([], {fullName: true})).toBe('[object Array]');
    expect(typeOf([])).toBe('Array');
});

test(`Symbol typeof Array`, () => {
    const s = Symbol('test');
    expect(typeOf(s, {fullName: true})).toBe('[object Symbol]');
    expect(typeOf(s)).toBe('Symbol');
});

test(`undefined typeof Undefined`, () => {
    expect(typeOf(undefined, {fullName: true})).toBe('[object Undefined]');
    expect(typeOf(undefined)).toBe('Undefined');
    // @ts-ignore
    expect(typeOf()).toBe('Undefined');
});
