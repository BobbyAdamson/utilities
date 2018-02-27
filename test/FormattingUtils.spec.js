import * as FormattingUtils from '../FormattingUtils';

describe('#Utils - Formatting', () => {

    describe('#formatUsd()', () => {
        const 
            formattedFloatLong = FormattingUtils.formatUsd(294746.26397946),
            formattedFloatTenth = FormattingUtils.formatUsd(4924.2),
            formattedInt = FormattingUtils.formatUsd(59304);

        test('Should cut floats to 2 decimal places', () => {
            expect(formattedFloatLong).toBe('$294,746.26');
        }); 

        test('Should force integers to 2 decimal places', () => {
            expect(formattedInt).toBe('$59,304.00');
        });

        test('Should add decimal place to floats only going to tenth values', () => {
            expect(formattedFloatTenth).toBe('$4,924.20');
        });
    });

    describe('#formatPercentage()', () => {
        const
            formattedPercentage = FormattingUtils.formatPercentage(11493/29889),
            formattedPercentageToThousandth = FormattingUtils.formatPercentage(11493/29889, 3);

        test('Should return value equal to or larger than 0', () => {
            expect(formattedPercentage).toBeGreaterThanOrEqual(0);
        });

        test('Should return value equal to or less than 100', () => {
            expect(formattedPercentage).toBeLessThanOrEqual(100);
        });

        test('Should return float to 100th decimal place by default', () => {
            expect(formattedPercentage).toBe(38.45);
        });

        test('Should return float to 1000th decimal place if passed the option', () => {
            expect(formattedPercentageToThousandth).toBe(38.452);
        });
    });
});