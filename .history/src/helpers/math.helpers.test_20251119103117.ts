import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helpers'

describe('add', () => {
    test('should add two positives numbers', () => {

        //* 1. Arrange
        const a = 1;
        const b = 3;

        //* 2. Act
        const result = add(a, b);
        //* 3. Assert
        expect(result).toBe(a + b);
    })
})

describe('subtract', () => {
    test('should add two positives numbers', () => {

        //* 1. Arrange
        const a = 1;
        const b = 3;

        //* 2. Act
        const result = subtract(a, b);
        //* 3. Assert
        expect(result).toBe(a + b);
    });

    test('should add two negative numbers', () => {

        //* 1. Arrange
        const a = -1;
        const b = -3;

        //* 2. Act
        const result = subtract(a, b);
        //* 3. Assert
        expect(result).toBe(a + b);
    });
})

describe('multiply', () => {
    test('should multiply positive even numbers 4 * 8', () => {

        //* Arrange
        const a = 5;
        const b = 3;

        //* Act
        const result = multiply(a, b);

        //* 3. Assert
        expect(result).toBe(a * b);
    })

    test('should multiply odd numbers', () => {

        //* Arrange
        const a = 7;
        const b = 7;

        //* Act
        const result = multiply(a, b);

        //* 3. Assert
        expect(result).toBe(a * b);
    })
})


