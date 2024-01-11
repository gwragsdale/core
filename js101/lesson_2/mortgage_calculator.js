// START

// GET loan amount
// GET APR
// GET loan duration (in duration of months)

// monthlyPayment = 
//    loanAmount * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest), (-loanDuration)))

let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || 
         Number.isNaN(Number(number)) || 
         Number(number) < 0;
}

prompt('Welcome to the Mortgage Calculator!');

prompt('Enter the total loan amount:');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt('Invalid entry');
  loanAmount = readline.question();
}

loanAmount = Number.parseFloat(loanAmount).toFixed(2); 

prompt('Enter the Annual Percentage Rate:');
let APR = readline.question();

while (invalidNumber(APR)) {
  prompt('Invalid entry');
  APR = readline.question();
}

let monthlyInterest = ((Number.parseFloat(APR)) / 12) * .01;

prompt('Enter the duration of the loan in years:');
let loanDurationInYears = readline.question();

while (invalidNumber(loanDurationInYears)) {
  prompt('Invalid entry');
  loanDurationInYears = readline.question();
}

let loanDurationInMonths = (Number.parseInt(loanDurationInYears)) * 12; 

let monthlyPayment = (loanAmount * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-loanDurationInMonths))))).toFixed(2);

prompt(`Your monthly mortgage payment is $${monthlyPayment}.`);