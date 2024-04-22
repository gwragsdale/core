/*

# Problem 

- function that takes to integers:
    1. count
    2. starting number
- return an array with the same number of elements 
  as the count argument
- the value of each element is a multiple of the starting number

- input: count integer, starting number integer
- output: array

- explicit rules:
    - count will always be >= 0
    - startingNum can be any integer including 0
    - if startingNum is 0, return an empty array

# Examples

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

# Data Structures

- Array

# Algorithm

1. set empty array
2. start loop while multiplier (which is 1) <= count argument
3. place the result of startingNum * multiplier to the array
4. return array

*/

function sequence(count, startingNum) {
  let result = [];

  for (let multiplier = 1; multiplier <= count; multiplier += 1) {
    result.push(startingNum * multiplier)
  }

  return result;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []