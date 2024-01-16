// START

// GET firstNumber
// GET secondNumber

// PRINT results (+, -, *, /, %, **)

// END

const readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

function arithmetic(num1, num2) {
  prompt(`${num1} + ${num2} = ${num1 + num2}`);
  prompt(`${num1} - ${num2} = ${num1 - num2}`);
  prompt(`${num1} * ${num2} = ${num1 * num2}`);
  prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  prompt(`${num1} % ${num2} = ${num1 % num2}`);
  prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
}

prompt("Enter the first number:");
let firstNumber = Number(readline.question());

prompt("Enter the second number:");
let secondNumber = Number(readline.question());

arithmetic(firstNumber, secondNumber);