import operate from './operate';

test('adds 7 + 8 to equal 15', () => {
  expect(operate(7, 8, '+')).toBe('15');
});

test('adds 20 - 7 to equal 13', () => {
  expect(operate(20, 7, '-')).toBe('13');
});
