/*

# Problem

- write a function that joins an array into a string
- the function takes three arguments:
    - the input array
    - a string representing the chosen delimiter
    - the penultimate conjunction

- input: array, string, string
- output: string combining the above elements

- implicit rules:
    - input will always be valid
    - default parameters:
        - ','
        - 'or'
    - an empty array returns an empty string

# Examples

joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

# Data Structures

- array

# Algorithm

- set default parameters!

1. set an empty string
2. iterate through the input array
3. add each element to the empty string
    - index 0 + delimiter
    - index 1 + delimiter
    - ...
    - final index = ` ${conj} + finalIndexElement
4. return string

# Code
*/

function joinOr(arr, delimiter = ', ', conj = 'or') {
  let joinedStr = '';

  if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return `${arr[0]} ${conj} ${arr[1]}`;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (i !== arr.length - 1) {
      joinedStr += arr[i] + delimiter;
    } else {
      joinedStr += `${conj} ${arr[i]}`
    }
  }
  
  return joinedStr;
}

joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"