// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase() {
  let number = 3;

  function inner(newNumber) {
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double() {
  let number = 5;
  function inner(double) {
    return number * 2;
  }
  return inner;
}

function totalArray() {
  let total = 0;
  function inner(arrayOfNumbers) {
    //add up array
    let total = arrayOfNumbers.reduce((acc, current) => acc + current);
    return total;
  }
  return inner;
}

/*Create a function which stores an empty string. Return an inner function which can accept either a string or an array of strings.
 If it's a string, add it to existing string separated by a space ' '. If it's an array of strings join them using a space,
  append to existing string separated by a space and add a fullstop . at the end. The inner function should return the new resulting string. */

function stringVariator() {
  let existingString = "";
  function inner(stringType) {
    if (typeof stringType === "string") {
      existingString.concat(stringType);
    } else if (Array.isArray(stringType)) {
      existingString.concat(stringType.join(" "));
    }
    return existingString + ".";
  }
  return inner;
}

module.exports = { increase, double, totalArray };
