/*

# Problem

- input: number
- output: number
    - the result of the difference between:
        1. square of the sum of the first count postive integers
        2. sum of the squares of the first count postive integers

# Examples

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

# Data Structures

- array
- loop to reduce
- loop to iterate

# Algorithms

1. HELPER FUNCTIONS
    - numToCountArray
    - squareOfSum
    - sumOfSquares
2. return the difference between the helper functions

# Code

*/

function numToCountArray(num) {
  let result = [];
  let count = 1;

  while (count <= num) {
    result.push(count);
    count += 1;
  }

  return result;
}

function squareOfSum(num) {
  return numToCountArray(num)
            .reduce((sum, num) => num + sum, 0)**2;
}

function sumOfSquares(num) {
  return numToCountArray(num)
            .reduce((sum, num) => num**2 + sum, 0);
}

function sumSquareDifference(num) {
  return squareOfSum(num) - sumOfSquares(num);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150