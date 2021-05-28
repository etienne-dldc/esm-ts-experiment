import { createNums } from "../src/index.js";
import test from "ava";

test("createNums", (t) => {
  t.is(createNums().length, 2);
});
