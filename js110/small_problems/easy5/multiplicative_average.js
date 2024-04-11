/*

# Problem

- write a function
- that takes an array of integers
- mulitply all integers together
- divide the result by the number of elements in input array
- return the result as a string, rounded to 3 decimal places

input: an array of integers
output: a string number rounded to 3 decimal places
        representing the integers multipled together
        and divided by the number of integers

explicit rules:
- output will be a string
- output will be rounded to 3 decimal places

questions:
- will the input always be valid?

# Examples

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

# Data Structures

- arrays

# Algorithm

1. reduce the array to a single number, multiplying the integers together
2. divide that number by the length of the input array, rounded to 
    3 decimal places
3. return that number as a string

# Code

1. array.reduce((a, b) => a * b, 1) / array.length
2. Number.toFixed(3)
3. String constructor

*/

function multiplicativeAverage(array) {
  return (array.reduce((acc, currVal) => acc * currVal, 1) 
          / array.length)
          .toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"