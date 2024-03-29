const readline = require("readline-sync");
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = "en"

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages("welcome", LANGUAGE)); 

while (true) {
  prompt(messages("firstNumber", LANGUAGE)); 
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages("invalidNumber", LANGUAGE));
    number1 = readline.question();
  }

  prompt(messages("secondNumber", LANGUAGE)); 
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages("invalidNumber", LANGUAGE));
    number2 = readline.question();
  }

  prompt(messages("operatorQuestion", LANGUAGE)); 
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES["invalidOperator"]); 
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}.`); 

  prompt(messages("finalQuestion", LANGUAGE));
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
} 