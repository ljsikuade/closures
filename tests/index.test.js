const { increase, totalArray } = require("../src/index.js");

test("increase", function() {
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 13;

  expect(result).toBe(expected);
});

// test("summing an array", function() {
//   const arg = [4, 8, 1, 9];
//   const inner = totalArray();
//   const result = inner(arg);

//   const expected = 22;

//   expect(result).toBe(expected);
// });

test("add strings", function() {});
