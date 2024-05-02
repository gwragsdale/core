/*

# Problem

- input: string

- output: object with 3 properties
    1. lowercase
    2. uppercase
    3. neither  
  each representing the number of characters in the string
  which fall into the appropriate category

# Examples

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

# Data Structures

- objects
- arrays

# Algorithm

0. set letters const
1. initialize result object, values all start at 0
2. split string into an array
3. iterate over each element in the array
4. add 1 to appropriate category in result object
5. return result object

# Code

*/

function letterCaseCount(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let result = {lowercase: 0, uppercase: 0, neither: 0};
  let strArr = str.split('');

  strArr.forEach(char => {
    if (letters.includes(char)) {
      result.lowercase += 1;
    } else if (letters.toUpperCase().includes(char)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  });

  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }