import * as MathUtils from '../BasicMathUtils';

describe('#Utils - Basic Math', () => {

    describe('#sum()', () => {
        const sumResult = MathUtils.sum(1, 2, 3.995);

        test('Should return total of array of numbers', () => {
            expect(sumResult).toBe(6.995);
        });

        test('Should not truncate values', () => {
            expect(parseFloat(sumResult)).toBe(parseFloat(sumResult.toFixed(3)));
        });
    });
    
    describe('#proportionOfTotal()', () => {
        const proportionQuotient = MathUtils.porportionOfTotal(98.765, 123.456);

        test('Should return value >= 0', () => {
            expect(proportionQuotient).toBeGreaterThanOrEqual(0);
        });

        test('Should return value <= 1', () => {
            expect(proportionQuotient).toBeLessThanOrEqual(1);
        });
    });
});