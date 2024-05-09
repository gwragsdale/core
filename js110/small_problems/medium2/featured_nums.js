/*

# Problem

- input: number
- output: number 
    - greater than the argument number
    - is a "featured number"

- explicit rules:
    - featured number:
        - is a multiple of 7
        - is odd
        - has no repeating digits
    - highest possible featured number is 9876543201

# Examples

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

# Data Structures

- loop

# Algorithm

0. guard clause:
    - if input num is greater than 9876543201, 
      return  "There is no possible number that fulfills those requirements."
1. set counter = (num + 7) - ((num + 7) % 7)
2. loop checking for conditions of featured number
    1. greater than argument AND
    2. each digit is unique AND
    3. is odd
  - until the above conditions are met, counter += 7
3. return counter

# Code

*/

function uniqueDigits(num) {
  let digitsObj = {};
  let strNumArr = String(num).split('');
  
  for (let idx = 0; idx < strNumArr.length; idx += 1) {
    currentDigit = strNumArr[idx];

    if (Object.keys(digitsObj).includes(currentDigit)) {
      digitsObj[currentDigit] += 1;
    } else {
      digitsObj[currentDigit] = 0;
    }
  }

  return Object
          .values(digitsObj)
          .reduce((sum, num) => num + sum, 0) === 0;
}

function isOdd(num) {
  return num % 2 === 1;
}

function featured(num) {
  if (num >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }

  let counter = (num + 7) - ((num + 7) % 7);

  while (true) {
    if (uniqueDigits(counter) && isOdd(counter)) break;

    counter += 7;
  }

  return counter;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."