/*

# Problem

input: array with one duplicate
output: a number representing the duplicate value

explicit rules:
- input always contains only one duplicate value

# Examples:

console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));

# Data Structures
- Arrays

# Algorithm

1. create an array of uniquesOnly values from input array
2. loop over elements
3. compare uniquesOnly to input arr
4. if the numbers don't match, result = that number from input array
5. break loop
6. return result

*/

function findDup(arr) { // [1, 3, 5, 7, 7, 8, 9]
  let uniquesOnly = {};

  arr.forEach(num => uniquesOnly[num] = 0);
  arr.forEach(num => uniquesOnly[num] += 1);


  let result;
  let ArrayObj = Object.entries(uniquesOnly);
  
  ArrayObj.map((_num, i) => {
    if (ArrayObj[i].includes(2)) {
      result = ArrayObj[i][0];
    }
  });

  return result;
}

console.log(findDup([1, 3, 5, 1, 7, 8, 9]));
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
   7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));
