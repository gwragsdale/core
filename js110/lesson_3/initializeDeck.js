/* 

# Problem

- write a function that creates an array of nested arrays
  representing every card in a deck

- input: none
- output: array of nested arrays of each card in a standard deck

# Examples

- output should look in part like:

[
  ['H', '2'], ['H', '3'], ['H', '4'], ['H', '5'], ['H', '6']
  ['H', '7'], ['H', '8'], ['H', '9'], ['H', '10'], ['H', 'J']
  ['H', 'Q'], ['H', 'K'], ['H', 'A'],
  ...
]

# Data Structures

- arrays

# Algorithm

1. set suits = ['H', 'D', 'C', 'S']
2. set values = ['2', '3', "4", "5"... ] 
    - these are constants in the global scope
3. set result = []
4. loop for length of suits 
    - inner loop for length of values
    - push [suits[i], values[j]] to result
5. return result

# Code

*/

const SUITS = ["H", "D", "S", "C"];
const VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function initializeDeck() {
  let deck = [];

  for (let i = 0; i < SUITS.length; i += 1) {
    let currentSuit = SUITS[i];

    for (let j = 0; j < VALUES.length; j += 1) {
      let currentValue = VALUES[j];

      deck.push([currentSuit, currentValue]);
    }
  }

  return deck;
} 

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
}

let deck = initializeDeck();
shuffle(deck);

// deal 2 cards to player
//    - array.prototype.pop() 
// deal 2 cards to dealer

function dealCards(deck) {

}

console.log(deck);