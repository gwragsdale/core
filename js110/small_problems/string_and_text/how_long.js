/*

# Problem

- input: string
- output: array
    - containing each word from intpu string
    - followed by a space and the word's length

- explicit rules:
    - if argument is empty string or no argument is passed
      return an empty array

# Examples

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

# Data Structures

- array

# Algorithm

1. split string into array of words
2. iterate over array
3. append to each word a space and the word's length
4. return array

# Code

*/

function wordLengths(str = '') {
  if (str.length === 0) return [];

  return str.split(' ').map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []