import React from "react";
import { TestComponent } from "./Component.js";

test("component render works", () => {
  expect(<TestComponent color="blue" />).toBeTruthy();
});
