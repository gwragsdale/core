const readline = require('readline-sync');
const SQ_FEET = 10.7639;

console.log(`Welcome to Room Area Calulater!`);

console.log(`Enter the length of the room:`);
let length = readline.question();
length = Number(length);

console.log(`Enter the width of the room:`);
let width = readline.question();
width = Number(width);

console.log(`Enter the unit of measurement:\n1) meters 2) feet`);
let units = readline.question();
units = Number(units);

let result = length * width;

if (units === 1) {
  console.log(
    `The area of the room is ${result} square meters (${result * SQ_FEET} square feet).`
    );
} else {
  console.log(
    `The area of the room is ${result} square feet (${result / SQ_FEET} square meters).`
  );
}