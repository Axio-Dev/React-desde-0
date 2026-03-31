import { describe, expect, test } from 'vitest';

import { add, multiply, subtract } from './math.helper';

describe('add', () => {
    test('Sould add two positives numbers', () => {
        //! 1. Arrange
        const a = 1;
        const b = 2;

        //! 2. Act
        const result = add(a, b);

        //! 3. Assert
        expect(result).toBe(a + b);

    });
    test('Sould add two negative numbers', () => {
        //! 1. Arrange
        const a = -1;
        const b = -2;

        //! 2. Act
        const result = add(a, b);

        //! 3. Assert
        expect(result).toBe(a + b);

    });
});


describe('Subtract', () => {
    test('Should subtract two positives numbers', () => {
        const a = 2;
        const b = 2;

        const result = subtract(a, b);

        expect(result).toBe(a - b)
    });
    test('Should subtract two negative numbers', () => {
        const a = -2;
        const b = -100;

        const result = subtract(a, b);

        expect(result).toBe(a - b)
    });
});

describe("Multiply", () => {
    test("Should multiply two positives numbers", () => {
        const a = 3;
        const b = 10;

        const result = multiply(a, b);

        expect(result).toBe(a * b)
    });
    test("Should multiply two negative numbers", () => {
        const a = -3;
        const b = -10.50;

        const result = multiply(a, b);

        expect(result).toBe(a * b)
    });
});
