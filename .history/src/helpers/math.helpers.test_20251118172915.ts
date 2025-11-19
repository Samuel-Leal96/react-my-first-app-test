import { expect, test } from 'vitest'
import { add } from './math.helpers'

test('should add two positives numbers', () => {
    const result = add(1, 2);

    console.log(`El resultado es ${result}`)

    expect(result).toBe(4)
})
