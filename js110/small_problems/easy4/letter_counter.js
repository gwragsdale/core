/*

# Problem

input: a string with 0 or more words separated by a space (' ')
output: an object showing the number of words of different sizes

explicit rules:
- words consist of any sequence of non-space characters

implicit rules:
- the size of a word is determined by its length
- an empty string returns an empty object

# Examples

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

# Data Structure

- Array
- Object
- Loops

# Algorithm

1. separate the words into an array
    - then transform each element to the length of each string
      - helper function?
2. set resultObject = empty object
3. count the number of times each number occurs in the array
    - each unique number becomes a key
    - and the number of times the key occurs in the array becomes
        the value for that key
*/

function wordSizes(str) {
  let resultObject = {};
  let stringLengthArray = wordsToLength(str);

  stringLengthArray.forEach(num => {
    if (num !== '0') resultObject[num] = 0;
  });

  stringLengthArray.forEach(num => {
    if (Object.keys(resultObject).includes(num)) {
      resultObject[num] += 1;
    }
  });
    
  return resultObject;
}

function wordsToLength(str) {
  let result = str.split('')
                  .filter(char => 'abcdefghijklmnopqrstuvwxyz '.includes(char.toLowerCase()))
                  .join('')
                  .split(' ');

  return result.map(word => word = String(word.length));
}

console.log(wordSizes('Four score and seven.'));                       
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  
console.log(wordSizes("What's up doc?"));                              
console.log(wordSizes(''));                                            