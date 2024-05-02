/* 

# Problem

- input: array
- output: a new array
    - with first element moved to the end of the array

- explicit rules:
    - if input is not an array, return undefined
    - if input is an empty array, return an empty array
    - do not mutate the original array

# Examples

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

# Data Structure

- arrays

# Algorithm

1. set guard clause to return undefined or empty array, accordingly
2. copy input array
3. last element of array = the removed first element
4. return copied array

# Code

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let result = arr.slice(1);
  let lastElement = arr[0];

  result.push(lastElement);

  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));      // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

console.log("++++++++++++++++++++++++");

function rotateRightmostDigits(integer, digitToRotate) {
  if (digitToRotate === 1) return integer;
  let digits = String(integer);
  let lastNum = digits[digits.length - digitToRotate];
  let result = digits.slice(0, -digitToRotate)
             + digits.slice((-digitToRotate + 1))
             + lastNum;
  
  return Number(result);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917