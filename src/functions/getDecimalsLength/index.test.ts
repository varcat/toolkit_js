import {getDecimalsLength} from "./index";

describe('getDecimalsLength', () => {
  test('normal', () => {
    expect(getDecimalsLength('1.00')).toBe(2)
    expect(getDecimalsLength('1.0000')).toBe(4)
    expect(getDecimalsLength('.0000')).toBe(4)
    expect(getDecimalsLength('0000')).toBe(0)
    expect(getDecimalsLength('00.00')).toBe(2)
  })
})
