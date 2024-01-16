const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function displayWinner(choice, computerChoice) {

  if ((choice === 'rock' && computerChoice === 'scissors') || 
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'spock') ||
      (choice === 'lizard' && computerChoice === 'paper')) {
    return "You won!";
  } else if ((computerChoice === 'rock' && choice === 'scissors') || 
            (computerChoice === 'rock' && choice === 'lizard') ||
            (computerChoice === 'scissors' && choice === 'paper') ||
            (computerChoice === 'scissors' && choice === 'lizard') ||
            (computerChoice === 'paper' && choice === 'rock') ||
            (computerChoice === 'paper' && choice === 'spock') ||
            (computerChoice === 'spock' && choice === 'rock') ||
            (computerChoice === 'spock' && choice === 'scissors') ||
            (computerChoice === 'lizard' && choice === 'spock') ||
            (computerChoice === 'lizard' && choice === 'paper')) {
    return "CPU won!";
  } else {
    return "It's a tie!";
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!\n=> The first to 3 is the grand winner.');

let userWinCounter = 0;
let computerWinCounter = 0;

while (true) {
  if (userWinCounter === 3) {
    prompt(`YOU: ${userWinCounter}\n=> CPU: ${computerWinCounter}\n=> You are the grand winner!`);
    break;
  } else if (computerWinCounter === 3) {
    prompt(`YOU: ${userWinCounter}\n=> CPU: ${computerWinCounter}\n+> CPU is the grand winner!`);
    break;
  }

  prompt(`The score is\n=> YOU: ${userWinCounter}\n=> CPU: ${computerWinCounter}`);

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  switch (choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 'sc':
      choice = 'scissors';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'sp':
      choice = 'spock';
      break;
  }

  while (!VALID_CHOICES.includes(choice)) {
    prompt(`That's not a valid choice.`);
    choice = readline.question().toLowerCase();

    switch (choice) {
      case 'r':
        choice = 'rock';
        break;
      case 'p':
        choice = 'paper';
        break;
      case 'sc':
        choice = 'scissors';
        break;
      case 'l':
        choice = 'lizard';
        break;
      case 'sp':
        choice = 'spock';
        break;
    }
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}; CPU chose ${computerChoice}.`);

  prompt(displayWinner(choice, computerChoice));

  if (displayWinner(choice, computerChoice) === 'You won!') {
    userWinCounter += 1;
  } else if (displayWinner(choice, computerChoice) === 'CPU won!') {
    computerWinCounter += 1;
  }
}