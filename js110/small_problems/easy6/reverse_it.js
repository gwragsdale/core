/*

# Problem

- write a function that takes a string argument
- returns a new string with the words in reverse order

- input: string
- output: new string

- implicit rules: 
    - empty string input returns empty string output

# Examples

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

# Data Structures

- Array

# Algorithm

1. split input string into array
2. reverse array
3. join reversed array
4. return new string


# Code
*/

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

// (Part 2)

function reverseWords(word) {
  return word.split(' ')
              .map(str => {
                if (str.length >= 5) {
                return str.split('').reverse().join('');
              } else {
                return str;
              }
              })
              .join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"