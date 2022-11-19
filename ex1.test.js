const convertValue = require('./ex1');

test('Test 3', () => {
    expect(convertValue(3)).toBe('Visual');
});

test('Test 5', () => {
    expect(convertValue(5)).toBe('Nuts');
});

test('Test 15', () => {
    expect(convertValue(15)).toBe('Visual Nuts');
});

test('Test 13', () => {
    expect(convertValue(13)).toBe(13);
});
  