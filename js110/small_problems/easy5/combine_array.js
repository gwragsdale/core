/*

# Problem

input: two arrays
output: a new array that combines elements from both arrays, removing duplicates

explicit rules:
- both arguments will always be arrays

implicit rules:
- the order of the result array will be as they appeared in the arguements
    but with the duplicates removed

# Examples

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

# Data Structures

- Arrays

# Algorithm

1. concatenate arrays into one new array
2. remove duplicates
    - determine if each number is present in result array
    - if not, push to result array
    - if it is already present, continue iteration
3. return array

*/

function union(array1, array2) {
  let combinedArray = array1.concat(array2); // [1, 3, 5, 3, 6, 9]
  let resultArray = [];
  
  combinedArray.forEach(num => {
    if (!resultArray.includes(num)) {
      resultArray.push(num);
    }
  })

  return resultArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]