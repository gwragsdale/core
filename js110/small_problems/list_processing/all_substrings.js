/* 

# Problem

- input: string
- output: list of all substrings of input

- explicit rules:
    - list order is determined by where the substring starts
    - make use of the leadingSubstrings function

# Examples

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

# Data Structures

- Array

# Algorithm

1. set result = []
2. loop for length of string
3. str = str.slice(i)
4. concat the result of str passed into leadingSubstrings 
    with empty result array
5. return result

*/

function leadingSubstrings(str) {
  let substr = '';

  return str.split('')
            .map(char => {
              substr += char;
              return substr; 
            });
}

// function substrings(str) {
//   let result = [];
  
//   for (let i = 0; i < str.length; i += 1) {
//     result = result.concat(leadingSubstrings(str.slice(i)));
//   }

//  return result;
// }

function substrings(str) {
  let result = [];

  [...str].map((_letter, i) => {
    result = result.concat(leadingSubstrings(str.slice(i)));
  });

  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]