const readline = require('readline-sync');
const CURRENT_YEAR = new Date().getFullYear();

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalidNumber(number) {
  return (Number.isNaN(number));
}

prompt('What is your age?');
let userAge = Number(readline.question());

while (isInvalidNumber(userAge)) {
  prompt('Invalid entry. Please input a valid number.');
  userAge = Number(readline.question());
}

prompt('At what age would you like to retire?');
let retirementAge = Number(readline.question());

while (isInvalidNumber(retirementAge)) {
  prompt('Invalid entry. Please input a valid number.');
  retirementAge = Number(readline.question());
}

let yearsToGo = retirementAge - userAge;

let retirementYear = yearsToGo + CURRENT_YEAR;

prompt(`It's ${CURRENT_YEAR}. You will retire in ${retirementYear}.`);
prompt(`You have only ${yearsToGo} years of work to go!`);