const readline = require("readline-sync");

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  resetPlayers() {
    this.human.score = 0;
    this.human.winner = false;
    this.computer.score = 0;
    this.computer.winner = false;
  },

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Rock, Paper, Scissor! First player to 5 points wins!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      this.human.score += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      this.computer.score += 1;
    } else {
      console.log("It's a tie");
    }

    this.displayScore();
  },

  playAgain() {
    this.resetPlayers();
    console.log("Would you like to play again? (y/n)");
    let answer = readline.question();
    return answer[0].toLowerCase() === "y";
  },

  displayScore() {
    console.log(`Your score: ${this.human.score}`);
    console.log(`Computer score: ${this.computer.score}`);
    if (this.human.score === 5) this.human.winner = true;
    else if (this.computer.score === 5) this.computer.winner = true;
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      while (true) {
        this.human.choose();
        this.computer.choose();
        console.clear();
        this.displayWinner();

        if (this.human.winner) {
          console.log("You win the game!");
          break;
        } else if (this.computer.winner) {
          console.log("Computer wins the game!");
          break;
        }
      }

      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

function createPlayer() {
  return {
    move: null,
    score: 0,
    winner: false,
  };
}

function createHuman() {
  let playerObj = createPlayer();

  let humanObj = {
    choose() {
      let choice;

      while (true) {
        console.log("Please choose rock, paper, or scissors:");
        choice = readline.question();
        if (["rock", "paper", "scissors"].includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
    },
  };

  return Object.assign(humanObj, playerObj);
}

function createComputer() {
  let playerObj = createPlayer();

  let computerObj = {
    choose() {
      let choices = ["rock", "paper", "scissors"];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(computerObj, playerObj);
}

RPSGame.play();