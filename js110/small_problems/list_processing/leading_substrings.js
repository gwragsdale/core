/*

# Problem

input: string
output: array of substrings sorted by length

# Examples

leadingSubstrings('abc');      // ["a", "ab", "abc"]

- arr[0] = str[0]
- arr[1] = str[0] + str[1]

leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

# Data Structures

- Array

# Algorithm

1. set subStr = str[0]
2. set result = []
3. loop for length of input string
    - index starts at 1
4. push subStr to result array
5. subStr += str[index]
6. return result array

*/

// function leadingSubstrings(str) {
//   let subStr = str[0];
//   let result = [];

//   for (let i = 1; i <= str.length; i += 1) {
//     result.push(subStr);

//     subStr += str[i];
//   }

//   return result;
// }

function leadingSubstrings(str) {
  let substr = '';

  return str.split('')
            .map(char => {
              substr += char;
              return substr; 
            });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]