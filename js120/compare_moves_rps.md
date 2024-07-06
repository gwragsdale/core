# problem

simplify this displayWinner function in oo_rps.js
by using an object to track winning, losing, and ties

use a compare() function?

# examples

input: human: rock, computer: scissors 
output: human wins

# data structures

- object with combinations
  - win
  - loss
  - tie

# algorithm

- create a winningMoves object

{
  win: {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  },

  loss: {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  },

  tie: {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
  }
}

- compare(humanMove, computerMove) 
  - get moves from player objects
  - loop over win and loss objects in winningMoves object
  - if the value at humanMove key === computerMove, return the object's key
      - eg, "win" or "loss"
  - else return "tie"

# code


let 
{
  win: {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  },

  loss: {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  },

  tie: {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
  }
}

compare(humanMove, computerMove) {
  for (let status in winningMoves) {
    if (winningMoves[status][humanMove] === computerMove) return status;
  }
}