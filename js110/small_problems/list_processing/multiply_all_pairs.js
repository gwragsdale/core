/*

# Problem

- function with 2 arguments
    - array of numbers
    - array of numbers
returns a new array
    - containing all the products of all combos
      between the two arrays
    - sorted in ascending numerical order

- explicit rules:
    - neither argument will be an empty array

# Example

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

# Data Structure

- Array

# Algorithm

1. set empty result array
2. outer loop for the length of the shortest input array
3. inner loop for length of longest array
4. push result of index of short array * each number of long array
    to the empty result array
5. return result

# Code
*/

function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i += 1) {
    let currentNum = arr1[i];

    for (let j = 0; j < arr2.length; j += 1) {
      let otherNum = arr2[j];

      result.push(currentNum * otherNum);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]