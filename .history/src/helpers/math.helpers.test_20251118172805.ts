import { test } from 'vitest'
import { add } from './math.helpers'

test('should add two positives numbers', () => {
    const result = add(1, 2);

    console.log(result)
})
