const { increase, double } = require("../src/index");

test("should double number", () => {
  expect(double()()).toBe(10);
});
