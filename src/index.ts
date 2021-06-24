import { createNum } from "./internal.js";
export { TestComponent } from "./Component.js";

export function createNums(): number[] {
  return [createNum(), createNum()];
}
