/*

# Problem

- input: string
- output: Boolean (true or false)

- given a set of "spelling blocks" with two letters on each block
    - eg:
    - B:O   X:K   D:Q   C:P   N:A
      G:T   R:E   F:S   J:W   H:U
      V:I   L:Y   Z:M
- write a function that returns true or false:
    - can the input string be spelled using the given blocks?

- explicit rules:
    - a block can only be used once
    - only one letter on a block can be used
    - letters are case-insensitive

# Examples

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false -- because H:U can't be used twice
isBlockWord('jest');       // true

# Data Structures

- object
    - to hold the blocks, and the count of times they have been used
- array
    - to loop over each letter in the string argument
- loop

# Algorithm

1. set blocks = blocksObj (with each block key set to 0)
2. iterate over each letter in string
3. if blocksObj key includes the letter, that block key += 1
4. after iteration, if blocksObj's values contains a num > 1
    - return false
    - else return true

# Code

*/

let blocks = [
  "B:O", "X:K", "D:Q", "C:P", "N:A",
  "G:T", "R:E", "F:S", "J:W", "H:U",
  "V:I", "L:Y", "Z:M"
];

function isBlockWord(str) {
  let strArr = str.split("");
  let trackLetters = blocksObj(blocks);

  for (let block in trackLetters) {
    strArr.forEach(letter => {
      if (block.includes(letter.toUpperCase())) {
        trackLetters[block] += 1;
      }
    });
  }

  let letterCount = Object.values(trackLetters);
  return letterCount.every(num => num <= 1);
}

function blocksObj(arr) {
  let result = {};

  arr.forEach(char => {
    result[char.toUpperCase()] = 0;
  });

  return result;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false -- because H:U can't be used twice
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false