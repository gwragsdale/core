/*

# Problem

input: array of numbers
ouput: array of numbers of running total from input array (separate array)

explicit rules:
- the output array must be the same number of elements as input array

implicit rules:
- an empty array returns an empty array
- an array with one number returns an array with that same number

# Examples

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

# Data Structures

- Arrays
- Loops
- Array methods

# Algorithm

1. set result = empty array
2. while index < the length of input array
    - iterate over input arrays elements
    - if index of iterator = 0, push arr[0] to result 
    - if index of iterator > 0, push arr[index] + return [index - 1]
3. return result

# Code

*/

function runningTotal(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      result.push(arr[i]);
    } else if (i > 0) {
      result.push(arr[i] + result[i - 1]);
    }
  }

  return result;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

let testArray = [14, 11, 7, 15, 20];

function runningAgain(array) {
  let total = 0;

  return array.map((num) => total += num);
}

console.log(runningAgain(testArray));