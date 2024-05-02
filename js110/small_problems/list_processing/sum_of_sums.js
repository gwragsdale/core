/*

# Problem

- input: array of integers

- output: integer
    - representing the sum of the sums of each 
      leading subsequence in that array

# Examples

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

# Data Structure

- arrays

# Algorithm

1. create an array with nested arrays
    - containing the 1st element [3]
    - the 1st and 2nd elements [3, 5]
    - the 1st, 2nd, and 3rd elements [3, 5, 2]
2. reduce each subarray by adding all the elements together
3. then reduce the main array by adding all the results together
4. return this result

arr[1], arr[i - 1, i], arr[i - 2, i - 1, i]

result.push([arr])
arr.pop()
result.push([arr])

# Code

*/

function sumOfSums(arr) {
  let arrCopy = arr.slice();
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(...arrCopy);
    arrCopy.pop();
  }

  console.log(result.reduce((sum, num) => num + sum, 0));
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35