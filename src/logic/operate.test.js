import operate from './operate';

test('adds 7 + 8 to equal 15', () => {
  expect(operate(7, 8, '+')).toBe('15');
});
