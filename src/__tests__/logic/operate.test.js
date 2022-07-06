import operate from '../../logic/operate';

describe('test our operate function', () => {
  test('adds 7 + 8 to equal 15', () => {
    expect(operate(7, 8, '+')).toBe('15');
  });

  test('adds 20 - 7 to equal 13', () => {
    expect(operate(20, 7, '-')).toBe('13');
  });
  test('divide 10 by 2  equal to 5', () => {
    const result = operate(10, 2, '÷');
    expect(result).toBe('5');
  });
  test('divide 10 by 0   should be Can not divide by zero', () => {
    const result = operate(10, 0, '÷');
    expect(result).toContain('Can not divide by 0.');
  });
  test('multipy 10 by 5 should be 50', () => {
    expect(operate(10, 5, 'x')).toBe('50');
  });
});
