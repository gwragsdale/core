/*

# Problem

- input: array of integers
- output: string indicating triangle type

# Examples

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

# Data Structures

- array

# Algorithm

1. sort array from lowest to highest
2. verify that array[0] + array[1] > array[2]
    - if not, return invalid
3. verify that each side is > 0
    - if not, return invalid
4. create helper functions:
    - isEquilateral
    - isIsosceles
        1. iterate through array
        2. 
    - isScalene
    - isInvalid (see steps 1 - 3)
# Code

*/

function isValid(lengthsArr) {
  if (lengthsArr.includes(0)) return false;
  
  lengthsArr.sort((a, b) => a - b);

  return lengthsArr[0] + lengthsArr[1] > lengthsArr[2];
}

function isEquilateral(lengthsArr) {
  let firstValue = lengthsArr[0];

  return lengthsArr.every(num => num === firstValue);
}

function isIsosceles(lengthsArr) {
  let obj = {};

  lengthsArr.forEach(num => obj[num] ? obj[num] += 1 : obj[num] = 1);

  return Object.values(obj).includes(2);
}

function isScalene(lengthsArr) {
  let obj = {};

  lengthsArr.forEach(num => obj[num] ? obj[num] += 1 : obj[num] = 1);

  return Object.values(obj).every(val => val === 1);
}

function triangle(side1, side2, side3) {
  let lengthsArr = [side1, side2, side3];

  if (!isValid(lengthsArr)) {
    return 'invalid';
  } else if (isEquilateral(lengthsArr)) {
    return 'equilateral';
  } else if (isIsosceles(lengthsArr)) {
    return 'isosceles';
  } else if (isScalene(lengthsArr)) {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"