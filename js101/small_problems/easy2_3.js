function multiply(num1, num2) {
  return num1 * num2;
}

function square(numToSquare) {
  return multiply(numToSquare, numToSquare);
}

// further exploration:

function toTheNthPower(number, nthPower) {
  let result = multiply(number, 1);
  let counter = 1;

  while (counter < nthPower) {
    result *= multiply(number, 1);
    counter += 1;
  }

  return result;
}

console.log(toTheNthPower(3, 2)); // 9
console.log(toTheNthPower(3, 3)); // 27
console.log(toTheNthPower(3, 4)); // 81
console.log(toTheNthPower(3, 5)); // 243