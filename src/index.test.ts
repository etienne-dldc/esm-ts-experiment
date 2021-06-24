import { createNums } from './index.js'
import test from 'ava'

test('createNums', (t) => {
  t.is(createNums().length, 2)
})
