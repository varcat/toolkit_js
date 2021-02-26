import {isEmpty} from "./isEmpty";

test('"" is empty', () => {
    expect(isEmpty('')).toBe(true);
})

test('[] is empty', () => {
    expect(isEmpty([])).toBe(true);
});
