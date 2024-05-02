/*

# Problem

- input: a sentence string
- output: another string with the numbers converted to arabic numerals

# Examples

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

# Data Structures

- object
- array

# Algorithm

1. set object = one - nine keys --> 1 - 9 values
2. split string into array of words
3. map over words, checking against the objects keys
4. if a word is also a key in the object, replace with value
    - word may contain punctuation:
    - filter words to letters
5. join the transformed array into a string
6. return transformed string

# Code

*/

let numsObj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

function justLetters(word) {
  return word.split('')
             .filter(letter => letter >= 'a' && letter <= 'z')
             .join('');
}

function wordToNum(word) {
  return numsObj[justLetters(word)];
}

function wordToDigit(sentence) {
  let numbers = Object.keys(numsObj);

  return sentence
            .split(" ")
            .map(word => {
    if (numbers.includes(word)) {
      return wordToNum(word);
    } else if (numbers.includes(justLetters(word))) {
      return wordToDigit(justLetters(word)) + word[word.length - 1];
    } else {
      return word;
    }
  })
            .join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."