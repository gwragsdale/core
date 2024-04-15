/* 

# Problem

- write a function that takes two arguments
    - two arrays of the same length,
    - made up of integers
- return a new array
    - containing the product of the two input arrays
    - of each pair of numbers of the same index

input: 2 arrays
output: a new array

explicit rules:
- both input arrays will contain the same number of elements

# Examples

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

# Data Structures

- arrays

# Algorithm

1. set resultArray = []
2. create a loop
    - idx = 0, increments by 1
    - at each iteration multiply together the integers at current index
    - append the result to resultArray
3. return resultArray

# Code
*/

let multiplyList = (arr1, arr2) => {
  let resultArray = [];

  for (let idx = 0; idx < arr1.length; idx += 1) {
    resultArray.push(arr1[idx] * arr2[idx]);
  }

  return resultArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));