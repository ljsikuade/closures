const {
  increase,
  totalArray,
  stringVariator,
  mergeSort,
  calculator,
  dogHome
} = require("../src/index.js");

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

test("add strings", function() {
  const arg = "what";
  const inner = stringVariator();
  const result = inner(arg);
  const expected = "what.";

  expect(result).toBe(expected);
});

test("mergeNumber", function() {
  const arg = 6;
  const inner = mergeSort();
  const result = inner(arg);
  const expected = 12;

  expect(result).toBe(expected);
});

test("calculate", function() {
  const argNumber1 = 6;
  const argOperator = "+";
  const argNumber2 = 12;
  const inner = calculator();
  const result = inner(argNumber1, argOperator, argNumber2);
  const expected = 18;

  expect(result).toBe(expected);
});

test("dogHome", function() {
  const arg = {
    name: "rex",
    breed: "Poodle",
    colour: "Blue",
    location: "Ipswich"
  };
  const inner = dogHome();
  const result = inner.houseDog(arg);
  const expected = { Ipswich: [arg] };

  expect(result).toEqual(expected);
});
