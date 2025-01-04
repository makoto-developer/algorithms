import { test } from "node:test";
import * as assert from "node:assert";
import * as fs from "node:fs/promises";
import { basic_sort } from "../sort/basic_sort.js";

test("sort test", async () => {
  const list = [10, 2, 3, 9];
  const expected = [2, 3, 9, 10];
  const result = basic_sort(list);
  assert.strictEqual(result, expected);
});

test("failed case, not list", async () => {
  const list = "a";
  const expected = [2, 3, 9, 10];
  const result = basic_sort(list);
  assert.ifError(result);
});
