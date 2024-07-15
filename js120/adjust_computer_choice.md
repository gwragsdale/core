# Problem

Adjust computer choice based on history

Come up with some rules based on the history of moves to help the computer make its moves. For instance, if the human tends to win over 60% of his hands when the computer chooses "rock," then decrease the likelihood that the computer will choose "rock." First, come up with an appropriate rule, then implement some history analysis. Use the analysis to adjust the weight of each choice -- for instance, increase the weight to increase the likelihood of choosing a particular move. Currently, the computer has a 33% chance of making any given move -- it's those odds that you need to weight. Finally, have the computer consider the weight of each choice when choosing a move.

input: percentage of wins based on choices?
output: weighted choices?

# examples

percentage of wins based on move

player: rock
cpu: scissors

rock: {wins: 1, losses: 0, ties: 0}
  - win percentage: wins / all values added together ==> 100%

player: rock
cpu: rock

rock {wins: 1, losses: 0, ties: 1}
  - win percentage: ==> 50%

# data structures

- object to track wins, losses, and ties

# algorithm

- track totalGamesPlayed
- track loss percentage per move
  - times rock has lost / total games played
  - paper lost / total games played

- if loss percentage is > 33%, make it less likely the computer chooses this move

- OR
  - every time computer wins with a move, push that move to the choices array
  - every time computer loses, remove that move from choices array

