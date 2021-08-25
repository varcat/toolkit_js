import {toggle} from "./toggle";

test('toggle', () => {
  const toggleStatus = toggle([
    () => 'one',
    () => 'two',
    () => 'three'
  ]);
  expect(toggleStatus()).toBe('one');
  expect(toggleStatus()).toBe('two');
  expect(toggleStatus()).toBe('three');
  expect(toggleStatus()).toBe('one');
})
