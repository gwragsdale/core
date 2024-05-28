/*

# problem

- input: a sorted array, searchitem
- output: index of the searchItem (or -1, if it doesn't occur)

- rules
    - must be a binary search:
        - cannot just iterate from beginning of array to end

        - starts search in the middle of the collection
            - middle = (length / 2, rounded down)
        - if middle value = searchItem, return index
        - if middle values < searchItem,
            - discard lower half (& middle value)
        - repeat the process from the top, using upper half as starting point
        - continue until the index of searchItem is found
--------------------------------------
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9

middleValue = 5 (arr[arr.length / 2, rounded down])
index = 4

5 < 9

middleValue = 8
index = 7

8 < 9

middleValue = 9
index = 8
--------------------------------------------
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3

middleValue = 7
index = 6

7 > 3

middleValue = 3
index = 2

3 === 3

# examples

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0
              0  1  2  3   4    5  6    7   8
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6

# data structures

- array
- loop
- object
    - in order to maintain index numbers?

# algorithm

0. middleIdx = length of array / 2, rounded down // 10 / 2 = 5
0a. endIdx = arr.length - 1
1. set middleValue = arr[middleIdx]

2. if middleValue === searchItem
    - return middleIdx
3. if middleValue > searchItem
    - middleIdx = (middleIdx - 1) / 2
4. if middleValue < searchItem (need to search upper half)
    - middleIdx += ((endIdx - (middleIdx + 1)) / 2)
5. if the end is reached and no match is found
    - return -1
*/

function binarySearch(arr, searchItem) {
  let endIdx = arr.length - 1;
  let middleIdx = Math.floor(endIdx / 2);
  let startIdx = 0;

  for (let iterations = 0; iterations < arr.length / 2; iterations += 1) {
    let middleValue = arr[middleIdx];

    if (middleValue === searchItem) {
      return middleIdx;
    } else if (middleValue > searchItem) {
      endIdx = middleIdx - 1;
      middleIdx = Math.floor(endIdx / 2);
    } else if (middleValue < searchItem) {
      startIdx = middleIdx + 1;
      middleIdx = startIdx + Math.floor((endIdx - startIdx) / 2);
    }
  }

  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6