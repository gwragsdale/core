/*

# Problem

- input: integer
- output: array
    - representing the number of lights still on after 
      `n` number of passes

- explicit rules
    - number of switches:
        - from 1 to input number
        - eg, if 5, then
            [1, 2, 3, 4, 5]
    - on each pass, each switch will be flipped
    - on first pass, all switches are off
    - the number of passes is the input number
        - eg 5
    - first pass are multiples of 1 up to input number
        - second pass are multiples of 2 (2, 4, 6...)
        - third pass are multiples of 3 (3, 6, 9...)
        - and so on

counter: 1
  innerCount: 1, 2, 3, 4, 5
counter 2
  innerCount: 2, 4
counter 3
  innerCount: 3
counter: 4
  innerCount: 4
counter: 5
  innerCount: 5

# Examples

function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Data Structures

- array or object?
  - of the switches
  - eg [1, 2, 3, 4, 5]
  - eg {1: false, 2: false...etc}

- loop
    - the number of passes

# Algorithm

1. create array from 1 to input number (helper function)
    - set result = []
    - loop from 1 to input
    - push the false to result array
    - return result
2. set passes = 1;
3. loop while passes <= input number
    - change elements in array to their Boolean opposite
        - eg if false, then true
    - index is multiplied by length of array - 1
    - if index * multiplier <= input number
      then change element at that index to its Boolean opposite
4. capture then indexes that are true in the array
5. push those "true" indexes to a result array
6. return result array

-----
(using 5 as an example):

1. iterate through switchesArray 'n' number of times
2. on first pass the indexes to change are found
    in multiples(1, 5) array
      - 
  - second pass, indexes to change are found
    in multiples(2, 5)
  - third pass:
    in multiples (3, 5)

# Code

*/

function multiples(num, limit) {
  let result = [];

  for (let count = 1; count <= limit; count += 1) {
    if (num * count <= limit) {
      result.push(num * count);
    }
  }

  return result;
}

function getSwitches(num) {
  let result = [];

  for (let count = 1; count <= num; count += 1) {
    result.push(false);
  }

  return result;
}

function findLightsOn(arr) {
  let result = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] === true) {
      result.push(idx + 1);
    }
  }

  return result;
}

function lightsOn(switches) {
  let switchArray = getSwitches(switches);
  let passes = 1;

  while (passes <= switches) {
    let switchIndexes = multiples(passes, switches);

    for (let idx = 0; idx < switchIndexes.length; idx += 1) {
      let index = switchIndexes[idx] - 1;
      switchArray[index] = !switchArray[index];
    }

    passes += 1;
  }

  return findLightsOn(switchArray);
}

console.log(lightsOn(5));
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]