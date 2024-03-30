let readline = require('readline-sync');
let numbersArray = [];


let num1 = readline.question('Enter the 1st number: ');
let num2 = readline.question('Enter the 2nd number: ');
let num3 = readline.question('Enter the 3rd number: ');
let num4 = readline.question('Enter the 4th number: ');
let num5 = readline.question('Enter the 5th number: ');
let num6 = readline.question('Enter the last number: ');

numbersArray.push(num1, num2, num3, num4, num5);

// if (numbersArray.includes(num6)) {
//   console.log(`The number ${num6} appears in ${numbersArray.join()}.`);
// } else {
//   console.log(`The number ${num6} does not appear in ${numbersArray.join()}.`);
// }

if (numbersArray.some(num => num > num6)) {
  console.log(`${numbersArray.join()} has a number greater than ${num6}.`);
} else {
  console.log(`${numbersArray.join()} does not have a number greater than ${num6}.`);
}