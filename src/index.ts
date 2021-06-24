import { createNum } from './internal.js'
export { TestComponent } from './Component'

export function createNums (): number[] {
  return [createNum(), createNum()]
}
