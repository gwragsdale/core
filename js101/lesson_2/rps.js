const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}; computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock')) {
    prompt("You won!");
  } else if ((computerChoice === 'rock' && choice === 'scissors') ||
            (computerChoice === 'scissors' && choice === 'paper') ||
            (computerChoice === 'paper' && choice === 'rock')) {
    prompt("Computer won!");
  } else {
    prompt("It's a tie!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let answer = 'y';

while (answer[0] === 'y') {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice.`);
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
}