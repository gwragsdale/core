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

    getComputerLossRate() {
      let computerMoves = Object.entries(RPSGame.computer.movesPlayed);
      let lossRatePerMove = [];

      computerMoves.forEach(moveTracker => {
        let [move, tracker] = moveTracker;
        let losses = tracker[1] - tracker[0];
        let total = tracker[1];
        let lossPercentage = ((losses / total) * 100);

        lossRatePerMove.push([move, lossPercentage]);
      });

      return lossRatePerMove;
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

    this.human.trackHumanMoves(outcome);
    this.computer.trackComputerMoves(outcome);
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
        this.computer.choose(this.comparison.getComputerLossRate());
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
    winner: false,
    score: 0,
    choices: ["rock", "paper", "scissors", "lizard", "spock"],

    movesPlayed: {  // if (movesPlayed.computer[move] percentage / 33% win rate)
      rock: [0, 0], // then temporarily remove that from choices
      paper: [0, 0],
      scissors: [0, 0],
      lizard: [0, 0],
      spock: [0, 0],
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
    },

    trackHumanMoves(outcomeOfMatch) {
      this.movesPlayed[this.move][1] += 1;
      if (outcomeOfMatch === "win") this.movesPlayed[this.move][0] += 1;
    },
  };

  return Object.assign(humanObj, playerObj);
}

function createComputer() {
  let playerObj = createPlayer();

  let computerObj = {
    winningChoices: [],

    choose(lossRate) {
      let betterChoices = this.choices.filter((_move, idx) => {
        return (lossRate[idx][1] < 30) || isNaN(lossRate[idx][1]);
      }).concat(this.choices);
      let randomIndex = Math.floor(Math.random() * betterChoices.length);
      this.move = betterChoices[randomIndex];
      console.clear();
    },

    trackComputerMoves(outcomeOfMatch) {
      this.movesPlayed[this.move][1] += 1;
      if (outcomeOfMatch === "loss") this.movesPlayed[this.move][0] += 1;
    },
  };

  return Object.assign(computerObj, playerObj);
}

RPSGame.play();