const ex2 = require('./ex2');

test('Number of countries', () => {
    let result = ex2();
    expect(result.numberOfCountries).toBe(5);
});

test('Count official german', () => {
    let result = ex2();
    expect(result.countOfficialGerman).toBe(3);
});

test('Max official german', () => {
    let result = ex2();
    expect(result.maxOfficialGerman).toBe('BE');
});

test('Highest official languages', () => {
    let result = ex2();
    expect(result.highestOfficialLanguages).toBe('BE');
});

test('Count common official language', () => {
    let result = ex2();
    expect(result.countCommonOfficialLanguage).toBe(2);
});

test('Common official language', () => {
    let result = ex2();
    expect(result.commonOfficialLanguage).toBe('nl');
});