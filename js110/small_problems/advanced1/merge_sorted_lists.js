/*

# problem

- input: two sorted arrays
- output: a single array
    - with all elements of input arrays sorted

- rules:
    - do not sort the result array
        - build the result array one element at a time
          in the proper order
    - do not mutate the input arrays

# examples

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

# data structures

- arrays
- loops, nested loops

# algorithm

- let allNums = array1.concat(array2)
- let currentMin
- let numOfNums = allNums.length
- let result = []

- loop for numOfNums:
    0. currentMin = Math.min(...allNums)
    1. push currentMin to result
    2. remove that pushed num
        - allNums.splice(index, 1)

- return result

# code

*/

function merge(arr1, arr2) {
  let allNums = arr1.concat(arr2);
  let numOfNums = allNums.length;
  let result = [];

  for (let count = 0; count < numOfNums; count += 1) {
    let currentMin = Math.min(...allNums);
    result.push(currentMin);
    allNums.splice(allNums.indexOf(currentMin), 1);
  }

  return result;
}

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

/*

# problem

- input: array
- output: a new array, sorted

- rules:
    - sort the array using the merge sort algorithm:
        - a recursive function
        - break down array into nested subarrays
        - combine those nested subarrays back together in sorted order

# examples

- [9, 5, 7, 1] -->
- [[9, 5], [7, 1]] -->
- [[[9], [5], [7], [1]]] -->
- [[5, 9], [1, 7]] -->
- [1, 5, 7, 9]

mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

# data structures

- array
- loop
- recursion

# algorithm

- HELPER FUNCTION splitArray
    1. set result = []
    2. split down the middle
    3. left = [first half of array element] (icluding middle if odd)
    4. push to result
    5. return result

- reduce array to further subarrays
    1. iterate for length of main array
    2. for each subarray, return splitArray(subarray)
-

# code

*/

function splitArray(arr) {
  let middle = Math.round(arr.length / 2);
  if (arr === 1) return arr;

  return [arr.slice(0, middle), arr.slice(middle)];
}

function mergeSort(arr) {
  let arrCopy = splitArray(arr);

  return arrCopy.map(el => {
    if (el.length > 1) {
      return splitArray(el);
    } else {
      return el;
    }
  });
}

console.log(mergeSort([9, 5, 7, 1, 2]));           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]