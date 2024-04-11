/*

# Problem

input: number
output: string from number

explicit rules:
  - input number will be a non-negative integer
  - do not use any standard conversion functions
  - do not use an expression like '' + number

4321

- positive or negative?




# Examples

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

# Data Structures

- object
- array

# Algorithm

1. isolate each digit of input integer
2. add each isolated digit to beginning of an empty array
2. reduce input number to 0
3. iterete over array now populated by digits
4. convert each digit to a string using the indexes of a string of digits
5. join the array
6. return joined array

*/

function integerToString(num) {
  let result = [];
  let digits = '0123456789'

  do {
    result.unshift(num % 10);
    num = Math.round(num / 10);
  } while (num > 0);

  return result.map(char => char = digits[char]).join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"

function signedIntegerToString(number) {
  let absInt = Math.abs(number);

  if (Object.is(number, -0) || Math.sign(number) === -1) {
    return '-' + integerToString(absInt)
  } else if (number === 0) {
    return integerToString(absInt);
  } else if (Math.sign(number) === 1) {
    return '+' + integerToString(absInt);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");