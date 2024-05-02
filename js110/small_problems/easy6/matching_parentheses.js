/*

# Problem

- write a function that takes a string as an argument
- and returns a boolean
     - true: if the parenthese in string are properly balanced
     - false: if not

- explicit rules:
    - balanced: parantheses must occur in matching '(' and ')' pairs

- implicit rules:
    - a string without parentheses returns true
    - counting number of ( vs number of ) doesn't work:
        - console.log(isBalanced("What ((is))) up(") === false);

# Examples

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

# Data Structures

- Array

# Algorithm

1. split string into array
2. filter out everything that isn't ( or )
    - guard clause: if no ( or ) return true
3. tests
    - if filtered array begins with ) or ends with (
      return false
    - count number of ( vs the number of )
      - countInstances helper function
        1. set empty object = {}
        2. loop for length of input array
        3. obj[index] ? += 1 : 1
        4. return object
    - if array passes both tests, return true

*/

// function instanceEquality(arr, char1 = '(', char2 = ')') {
//   let countChar1 = 0;
//   let countChar2 = 0;

//   arr.forEach(element => {
//     if (element === char1) {
//       countChar1 += 1;
//     } else if (element === char2) {
//       countChar2 += 1;
//     }
//   });

//   return countChar1 === countChar2;
// }

// function isBalanced(str, char1 = '(', char2 = ')') {
//   let filteredArr = str.split('')
//                        .filter(char => char === char1 || char === char2);
//   let filteredStr = filteredArr.join('');
  
//   return instanceEquality(filteredArr, char1, char2) && 
//          !filteredStr.startsWith(char2) &&
//          !filteredStr.endsWith(char1);
// } 

// above code doesn't work with "''"

function isBalanced(string, char1 = '(', char2 = ')') {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === char1) {
      parens += 1;
    } else if (string[idx] === char2) {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

console.log(isBalanced("''''", "'", "'") === true);

/*

This expansion doesn't work because "'" always increments the parens variable

*/