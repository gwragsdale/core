const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.\nFirst to 5 wins match.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square; 

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
      
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line += 1) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
    board[sq1] === COMPUTER_MARKER &&
    board[sq2] === COMPUTER_MARKER &&
    board[sq3] === COMPUTER_MARKER
    ) {
    return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function joinOr(arr, delimiter = ', ', conj = 'or') {
  let joinedStr = '';

  if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return `${arr[0]} ${conj} ${arr[1]}`;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (i !== arr.length - 1) {
      joinedStr += arr[i] + delimiter;
    } else {
      joinedStr += `${conj} ${arr[i]}`
    }
  }
  
  return joinedStr;
}

function getScore(obj) {
  prompt(`Current Score\nPlayer: ${obj['Player']} | Computer: ${obj['Computer']}\n`);
}

while (true) {                    // Play again? Loop
  let board = initializeBoard();
  let score = {
    Player: 0, Computer: 0,
  }
  
  while (true) {                  // First to 5 Loop
    board = initializeBoard();

    while (true) {                // Winner or Tie Loop
      displayBoard(board);
      getScore(score);

      if ((someoneWon(board)) || boardFull(board)) break;
      playerChoosesSquare(board);

      if (someoneWon(board) || boardFull(board)) break;
      computerChoosesSquare(board);

      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      score[detectWinner(board)] += 1;
      getScore(score);
    } else {
      prompt("It's a tie!");
    }

    if (Object.values(score).includes(5)) break;
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

  prompt('Thanks for playing Tic Tac Toe!');

/*

# Problem

- keep track of the number of times 'Player' has won 
    - vs how many times 'Computer' has won
- the first to 5 wins the match
- the score should reset to 0 at the beginning of a new match

- input: string? boolean?
- output: a string representing the score of each player

- explicit rules:
    - no global variables 
        (except a constant for required number of matches to win)
    - score should reset to 0 at the start of new match
    - a match is a series of 2 or more games

# Examples

getScore() // 'Player: 0 - Comupter: 0'
getScore() // 'Player: 4 - Computer: 3'
getScore() // 'Player: 5 - Computer: 4/n Player wins match.'

# Data Structure

- Loop
- Object 
  {Player: 0, Computer: 0}

# Algorithm

1. create score object
    {Player: 0, Computer: 0}
2. add another if statement when the program checks if someoneWon(board)
    - if someoneWon, then
        score[detectWinner(board)] += 1;
3. if score values includes 5, break loop
4. then output the winner 
    - getScore(obj)

*/