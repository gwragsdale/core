/*

# Problem

- input: string
- output: string
    - with first letter of each word capitalized
    - and the subsequent letters uncapitalized

- explicit rules:
    - a word is any sequence of non-whitespace characters

- implicit rules:
    - input string will always be a series of uncapitalized words?

# Examples

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

# Data Structures

- array

# Algorithm

1. split string into array
2. iterate over array
3. capitalize the first letter of each word
4. join array into string
5. return the result

# Code

*/

function wordCap(str) {
  return str.split(" ")
            .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'