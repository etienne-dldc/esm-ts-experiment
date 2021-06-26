import { createNum } from "../src/internal.js";

test("createNum", () => {
  expect(typeof createNum()).toBe("number");
});
