/*

# Problem

- input: array
- output: a bubble-sorted array

- explicit rules:
    - a bubble sort:
        - makes multiple passes through the array
        - on each pass, the two values of each pair
          of consecutive elements are compared
        - if the 1st value > 2nd value, the values
          are swapped
        - iterate through the array, until a complete
          pass is made without making any swaps
    - sorting should be done in place
    - array contains at least two elements

# Examples

[6, 2, 7, 1, 4]

- 6 > 2? --> is arr[i] > arr[i + 1]
- yes, so swap --> arr[i] = arr[i + 1], arr[i + 1] = arr[i]
- 6 > 7?
- no swap
- 7 > 1?
- swap
- 7 > 4?
- swap 
--> [2, 6, 1, 4, 7] --> result after 1st iteration

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

# Data Structures

- arrays
- loop within loop

# Algorithm

1. set swap;
2. loop while (true)
  - swap = 0
    - another loop to iterate through array
    - currentVal = arr[idx]
    - nextVal = arr[idx + 1]
    - if currentVal > nextVal
        - arr[i] = nextVal
        - arr[i + 1] = currentVal
        - swap += 1
  - outer loop terminates if swap === 0
3. return array

# Code

*/

function bubbleSort(arr) {
  while (true) {
    let swap = 0;

    for (let idx = 0; idx < arr.length; idx += 1) {
      let currentVal = arr[idx]
      let nextVal = arr[idx + 1];

      if (currentVal > nextVal) {
        arr[idx] = nextVal;
        arr[idx + 1] = currentVal;
        swap += 1;
      } 
    }

    if (swap === 0) break;
  }

  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]