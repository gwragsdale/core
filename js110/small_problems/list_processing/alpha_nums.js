/*

# Problem

- input: array of integers
- output: array of integers sorted alphabetically by the English word
          for those integers

- explicit rules:
    - 1 = 'one'
    - 2 = 'two'
    - etc.

- unique numbers
    - 1 -19
    - 20, 30, 40, ...
    - 

# Examples

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

# Data Structures

- object
- array

# Algorithm

1. create object with keys from
    - 0 - 19
    - 20, 30, ...
    - 
2. break number down HELPER FUNCTION
    0. set empty array
    1. determine length of number
        - if 1, retrieve English word from object
        - if <= 19, retrieve English word from object
    2. if length >= 2 AND > 19, 
       break number down into hundreds, tens, ones, etc
        - eg, 23
        - length is 2, > 19
        - 23 % 10 = 3
            - put into start of array
            - num -= 3 --> 20
            - put into start of array
        - array = [20, 3]
3. broken down number into English HELPER FUNCTION
    - take broken down number array [20, 3]
    - retrieve values from object constant
    - replace values ['twenty', 'three']
    - join together with hyphen ('-')
    - return joined string
4. sort array
    - breakDown(num) --> numToAlpha --> sort
5. return sorted array

- broken down num (4321 => [4000, 300, 20, 1])

# Code

*/

const NUMS_TO_ENGLISH = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
} 

let engToNums = {};

for (let keys in NUMS_TO_ENGLISH) {
  engToNums[NUMS_TO_ENGLISH[keys]] = keys;
}

let lengthToThousandth = {
  4: 'thousand',
  3: 'hundred',
}

function numToEnglish(num) {
  if (num <= 19) {
    return NUMS_TO_ENGLISH[String(num)];
  }

  let result = String(num).split('');
  let multiplier = result.length;

  result.forEach((num, i) => {
   if (multiplier > 2 && Number(num) > 19) {
      result[i] = NUMS_TO_ENGLISH[String(num)] + '-' + lengthToThousandth[String(num)];

      multiplier -= 1;
    } else if (i === result.length - 2) {
      result[i] = NUMS_TO_ENGLISH[String(num * 10)];

      multiplier -= 1;
    } else {
      result[i] = NUMS_TO_ENGLISH[String(num)];

      multiplier -= 1;
    }
  });

  return result.join(', ');
}

function alphabeticNumberSort(arr) {
  return arr.map(num => numToEnglish(num))
            .sort()
            . map(word => word = engToNums[word]);
}

console.log(alphabeticNumberSort(
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]