import test from "ava";
import React from "react";
import { TestComponent } from "./Component.js";

test("component render works", (t) => {
  t.truthy(<TestComponent color="blue" />);
});
