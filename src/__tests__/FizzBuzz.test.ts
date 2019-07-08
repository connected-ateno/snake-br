import FizzBuzz from '../FizzBuzz';

type FizzBuzzCase = [string, number[], string, string | undefined];

const FIZZ_BUZZ_CASES: FizzBuzzCase[] = [
    [
        'Multiples of 3 [3, 6, 9, 12]',
        [3, 6, 9, 12],
        'Should return Fizz',
        'Fizz',
    ],
    [
        'Multiples of 5 [5, 10, 20, 25]',
        [5, 10, 20, 25],
        'Should return Buzz',
        'Buzz',
    ],
    [
        'Multiples of 3 and 5 [15, 30, 45, 60]',
        [15, 30, 45, 60],
        'Should return FizzBuzz',
        'FizzBuzz',
    ],
    [
        'Other numbers [2, 4, 7, 8]',
        [2, 4, 7, 8],
        'Should return themselves',
        undefined,
    ],
];

describe('FizzBuzz', () => {

    FIZZ_BUZZ_CASES.forEach(([describeLabel, values, itLabel, expected]) => {
        describe(describeLabel, () => {
            it(itLabel, () => {
                values.forEach((value) => {
                    expect(FizzBuzz.fizzBuzz(value)).toBe(expected || value);
                });
            });

        });
    });

});
