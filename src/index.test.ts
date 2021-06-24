import { createNums } from "./index.js";

test("createNums", () => {
  expect(createNums()).toHaveLength(2);
});
