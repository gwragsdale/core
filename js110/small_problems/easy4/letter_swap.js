/*

# Problem

input: string
output: string 
  - in which first and last letters have been swapped

explicit rules:
- input string will always contain at least 1 word
- every word will contain at least 1 letter
- there will be no leading, trailing, or repeated spaces

implicit rules:
- case stays the same

# Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

# Data Structures

- Array

# Algorithm

1. Split string into an array
2. iterate over each word in the array
3. swap the first for the last letter
    - split word into array
    - swap first element with last element
4. join the array into a string
5. return the joined, transformed array

*/

function swap(str) {
  let strArr = str.split(' ');
  let result = [];

  strArr.forEach(word => {
    let firstLetter = word[0];
    let lastLetter = word.length - 1;
    
    if (word.length === 1) {result.push(word)}
    else {result.push(word[lastLetter] + word.slice(1, lastLetter) + firstLetter)}
  });

  return result.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"