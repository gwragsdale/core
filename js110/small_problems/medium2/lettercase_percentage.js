/*

# Problem

- input: string
- output: object containing:
    1. percentage of lowercase letters
    2. percentage of uppercase letters
    3. percentage of non-alphabet chacaracters

- explicit rules:
    - string will not be empty

- implicit rules:
    - spaces count as "neither"
    - round number to two decimal places


# Examples

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

# Data Structures

- object
- loop
- array
- Number.toFixed(2)

# Algorithm

1. set obj = { lowercase: 0.00, uppercase: 0.00, neither: 0.00, }
1a. set lowercase = 0, uppercase = 0, neither = 0, total = 0
2. set loop
    - terminates when idx === str.length
    - total += 1
    - if char is uppercase, etc, increment appropriate variable
3. assign values to appropriate keys in object
    - lowercase / total

    - toPercentage(num) HELPER FUNCTION
        1. return number * 10, rounde to two decimal places

4. return obj

# Code

*/

function toPercentage(num) {
  return (num * 100).toFixed(2);
}

function getNumbersOfChars(str) { 
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    if (alphabet.includes(currentChar)) {
      lowercase += 1;
    } else if (alphabet.toUpperCase().includes(currentChar)) {
      uppercase += 1;
    } else {
      neither += 1;
    }
  }

  return [lowercase, uppercase, neither];
}

function letterPercentages(str) {
  let percentObj = { lowercase: 0, uppercase: 0, neither: 0, };
  let totalChars = str.length;
  let numOfCharsArr = getNumbersOfChars(str);
  let index = 0;
  
  for (let charType in percentObj) {
    let categoryNums = numOfCharsArr[index];
    percentObj[charType] = toPercentage(categoryNums / totalChars);

    index += 1;
  }

  return percentObj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }