/*

# Problem:

input: a string of digits
output: the appropriate number as an integer

explicit rules:
- do not use parseInt() or Number()
- assume all input characters will be numeric
- do not use any standard conversion methods

# Examples:

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

# Data Structures

- Array
- Loop
- Reassignment
- Object

# Algorithm

1. create an object 
    - the keys are string numbers
    - the values are the number equivalent
        - eg. {'1': 1}
2. split string into an array
3. iterate through input string
4. reassign each element by referencing the object's key
5. determine length of array
    - 1 --> 1s
    - 2 --> 10s
    - 3 --> 100s
    - 4 --> 1000s
6. set integer = 0;
7. iterate through integerArray
    - if length is 4 (for example 4321)
        - integer += (integerArray[0] * 1000) // 4000
        - integer += (integerArray[1]) * 100) // 4300
        - integer += (integerArray[2] * 10)   // 4320
        - integer += (integerArray[3] * 1)    // 4321

# Code

*/

const NUMBERS = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
};

// function stringToInteger(string) {
//   let integerArray = string.split('').map(char => char = NUMBERS[char]);
//   let multiplier = '1' + '0'.repeat(integerArray.length - 1);
//   let integer = 0;

//   for (let i = 0; i < integerArray.length; i += 1) {
//     integer += (integerArray[i] * multiplier);
//     multiplier = multiplier.slice(0, multiplier.length - 1);
//   }

//   return integer;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// console.log(stringToInteger('1324530918'));

function stringToSignedInteger(string) {
  let integerArray = string.split('');
  let integer = 0;
  let negNum = null;

  if (integerArray[0] === '+') {
    integerArray.shift()
    integerArray = integerArray.map(char => char = NUMBERS[char]);
  } else if (integerArray[0] === '-') {
    negNum = -1;
    integerArray.shift();
    integerArray = integerArray.map(char => char = NUMBERS[char]);
  } else {
    integerArray = integerArray.map(char => char = NUMBERS[char]);
  }

  integerArray.forEach(num => integer = (10 * integer) + num);

  return (negNum === null) ? integer : integer * negNum;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true