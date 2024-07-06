const readline = require("readline-sync");

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  comparison: {
    moves: {
      win: {
        rock: ["scissors", 'lizard'],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["spock", "paper"],
        spock: ["rock", "scissors"],
      },

      loss: {
        rock: ["paper", "spock"],
        paper: ["scissors", "lizard"],
        scissors: ["rock", "spock"],
        lizard: ["rock", "scissors"],
        spock: ["lizard", "paper"],
      },
    },

    compareMoves(humanMove, computerMove) {
      for (let status in this.moves) {
        if (this.moves[status][humanMove].includes(computerMove)) return status;
      }

      return "tie";
    },
  },

  resetPlayers() {
    this.human.score = 0;
    this.human.winner = false;
    this.computer.score = 0;
    this.computer.winner = false;
  },

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock! First player to 5 points wins!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    let outcome = this.comparison.compareMoves(humanMove, computerMove);

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (outcome === "win") {
      console.log('You win the match!');
      this.human.score += 1;
    } else if (outcome === "loss") {
      console.log('Computer wins the match!');
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
    console.log(this.human.historicalMoves);
    console.log(this.computer.historicalMoves);
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
    choices: ["rock", "paper", "scissors", "lizard", "spock"],

    historicalMoves: {
      rock: 0,
      paper: 0,
      scissors: 0,
      lizard: 0,
      spock: 0,
    },
  };
}

function createHuman() {
  let playerObj = createPlayer();

  let humanObj = {
    choose() {
      let choice;

      while (true) {
        console.log("Please choose rock, paper, scissors, lizard, or spock:");
        choice = readline.question();
        if (this.choices.includes(choice)) break;
        console.log("Sorry, invalid choice.");
      }

      this.move = choice;
      this.historicalMoves[choice] += 1;
    },
  };

  return Object.assign(humanObj, playerObj);
}

function createComputer() {
  let playerObj = createPlayer();

  let computerObj = {
    choose() {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      this.move = this.choices[randomIndex];
      this.historicalMoves[this.move] += 1;
    },
  };

  return Object.assign(computerObj, playerObj);
}

RPSGame.play();