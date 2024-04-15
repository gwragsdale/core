/*

# Problem

- write a function that takes no argument
- that returns a random UUID

- input: nothing
- output: string, representing a random UUID

- explicit rules:
    - UUID is made up of 32 of the following character:
        - the digits 0 - 9
        - the letter a - f
    - the UUID is made up of 5 sections in an 8-4-4-4-12 pattern
        - eg, 'f23c5642-f42d-25d1-165j-fe36y89lo932'

# Examples

- '12345678-1234-1234-1234-123456789123'

# Data Structures

- Array
- Object?

# Algorithm

1. create a const array made up of the hexadecimal values (1 - 9; a - f)
      with a length of 15
2. randomString HELPER FUNCTION 
    1. takes 1 argument - the desired length of output string 
    2. randomly pick a number between 0 and 14
        - representing the indexes of the hexadecimal values array
    3. loop while length of result string is less than the argument passed
    4. at each iteration, resultString += a character at the random index
          of the hexadecimalValues array
    5. return the resultString
4. return randomString(8) + randomString(4) + randomString(4) +
          randomString(4) + randomString(12)

# Code

*/

const HEX_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function randomNum(min, max) {
  let minCeil = Math.ceil(min);
  let maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}

function randomString(strLength) {
  let resultString = '';

  while (resultString.length < strLength) {
    let randomIdx = randomNum(0, 14);
    
    resultString += HEX_VALUES[randomIdx];
  }

  return resultString;
}

function getUUID() {
  return randomString(8) + '-' +  randomString(4) + '-' + randomString(4) + '-' + 
         randomString(4) + '-' + randomString(12);
}

console.log(getUUID());