const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function displayBoard(board) {
  // console.clear();

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
  let defenseIndex = detectImmediateThreat(board);

  if (!!detectImmediateThreat(board)) {
    let square = defenseIndex;
    board[square] = COMPUTER_MARKER;
  } else {
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

// AI: Defense

function detectImmediateThreat(board) {                         
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === INITIAL_MARKER) {
        return String(WINNING_LINES[line][2]);
    } else if (
      (board[sq1] === HUMAN_MARKER &&
       board[sq3] === HUMAN_MARKER &&
       board[sq2] === INITIAL_MARKER)) {
        return String(WINNING_LINES[line][1]);
    } else if (
      (board[sq2] === HUMAN_MARKER &&
       board[sq3] === HUMAN_MARKER &&
       board[sq1] === INITIAL_MARKER)
      ) {
        return String(WINNING_LINES[line][0]);
    } 
  }

  return false;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

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

let board = initializeBoard();
board['1'] = 'X';
board['5'] = 'X';
console.log(detectImmediateThreat(board));
computerChoosesSquare(board);
console.log(board);
displayBoard(board);