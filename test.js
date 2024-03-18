test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One euro should be 1.07 dollars and 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = 7 * 1.07 * 156.5;
    expect(fromDollarToYen(7)).toBe(expected); 
})

test("from yen to pound", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = 10 * 156.5 * 0.87;
    expect(fromYenToPound(10)).toBe(expected); 
})