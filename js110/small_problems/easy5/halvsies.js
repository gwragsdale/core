/* 

# Problem

input: an unnested array
output: a new array with two elements, each a nested array 

explicit rules:
  - each nested array (if input array's length is even) contains the same
      number of elements
  - if input array's length is odd, the first nested array contains the extra element

implicit rules:
  - if input array is blank, return an array with to blank nested arrays
  - if only one element in input array, result array 
      has one populated array and one blank array

# Examples

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

# Data Structures

- Arrays

# Algorithm

1. set resultArray = [[], []]
    - elements from input will be pushed into
        array[0] or array[1], depending upon
        length of input array
2. loop for the length of input array
3. if array's current index + 1 <= array's length / 2 (rounded up), 
    push to resultArray[0], else
    push to resultArray[1]
4. return result Array

# Code with intent

*/

function halvsies(array) {
  let result = [[], []];

  for (let i = 0; i < array.length; i += 1) {
    if (i < Math.ceil(array.length / 2)) {
      result[0].push(array[i]);
    } else {
      result[1].push(array[i]);
    }
  }

  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]