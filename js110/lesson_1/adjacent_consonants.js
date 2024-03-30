/*

# Problem

input: array of strings
output: new array sorted by strings with highest number of adjacent consonants

explicit rules: 
    - adjacent consonants: next to each other in same word or separated by a space
    - 'y' and 'w' are consonants
    - if there is a tie between strings, the original order 
        (relative to each other) should remain

implicit rules:
    - 

questions:
    - what if there are no consonants? Should the original order be retained?


# Examples

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

Notes: 
- strings can contain multiple words
- strings don't have to contain real words
- consonants are adjacent if one word ends 
    with a consonant and the next begins with one
- if there are no adjacent consonants, return the original order
- strings are sorted in descending order

More questions:
- will all strings be lower case?
- will the given array always only have 4 elements?

# Data Structures

- will need to loop over each string AND over each array element
    - nested loops?

# Algorithm

- set consObj

- set resultArray = []

- Loop over each element in array
    - index = 0, increments by 1
    - consObj[inputArray[index]] = 0;
        - loop over characters in string, searching for adj cons
        - for every adj cons, consObj[inputArray[index] += 1]

- return result array by pushing consObj's keys to resultArray
    based on the number of adjacent consonants contained in the strings

*/

const VOWELS = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];

// function countMaxAdjacentConsonants(str) {
//   let removeSpaces = str.split('').filter(char => char !== ' ');
//   let count = 0;
//   let tempString = '';

//   for (let i = 0; i < removeSpaces.length; i += 1) {
//     if (!VOWELS.includes(removeSpaces[i])) {
//       tempString += removeSpaces[i];
      
//       if (tempString.length > count) {
//         count = tempString.length;
//       }
//     } else if (tempString.length > 1 && tempString.length > count) {
//       count = tempString.length;

//       tempString = '';
//     }
//   }

//   return count;
// }

function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempStr = '';
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempStr += letter;

      if (tempStr.length > 1 && tempStr.length > count) {
        count = tempStr.length;
      }
    } else {
      tempStr = '';
    }
  }

  return count;
}

function sortStringsByConsonants(arr) {
  let result = [];
  let adjConsCount = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (countMaxAdjacentConsonants(arr[i]) <= countMaxAdjacentConsonants(adjConsCount)
    || countMaxAdjacentConsonants(arr[i]) <= 1) {
      result.push(arr[i]);
      adjConsCount = arr[i];
    } else {
      result.unshift(arr[i]);
      adjConsCount = arr[i];
    }
  }

  return result;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
