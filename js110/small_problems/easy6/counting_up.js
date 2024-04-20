/*

# Problem

- input: integer
- output: array of integers between 1 and including input integer

# Examples

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

# Data Structure

- Array

# Algorithm

1. set empty array
2. create a loop 
    - counter = 1
    - terminates when reaches input integer
    - push counter to array
    - increment counter by 1
3. return array

*/

function sequence(num) {
  let result = [];

  for (let counter = 1; counter <= num; counter += 1) {
    result.push(counter);
  }

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]