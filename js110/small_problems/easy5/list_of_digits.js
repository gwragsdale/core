/* 

# Problem

- write a function 
- that takes a postive integer
- and returns an array
- made up of all the digits in the number

input: a positive integer
output: an array

# Examples

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

# Data Structures

- Array

# Algorithm

1. create empty array = []
2. create a loop
    - that continues while input num > 0
    - append result of the remainder of (num / 10)
        to the START of empty array
    - reassign num each iteration 
        - (num / 10) rounded down to nearest integer
3. return array
    
# code

*/

function digitList(num) {
  let resultArr = [];

  while (num > 0) {
    resultArr.unshift(num % 10);

    num = Math.floor(num / 10);
  }

  return resultArr;
}

console.log(digitListMap(12345));       // [1, 2, 3, 4, 5]
console.log(digitListMap(7));           // [7]
console.log(digitListMap(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitListMap(444));         // [4, 4, 4]

function digitListMap(number) {
  return String(number)
                      .split("")
                      .map(char => Number(char));
}