import { test } from 'vitest'
import { add } from './math.helpers'

test('should add two positives numbers', () => {
    add(1, 2);
})
