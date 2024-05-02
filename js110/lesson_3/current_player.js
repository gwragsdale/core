// # Problem 

// - make a constant so that the game can be played
// - with either the player or the computer going first
// - 3rd option is that the player gets to choose who goes first

// - input: a string
//     - either 'player', 'computer', 'choose'

// - output: 
//     - the function, depending on the choice, starts the game
//       with the appropriate player playing the first move

// - questions:
//     - I'm not sure what is wanted here:
//         - a function that randomly chooses from the options?
//             - 'player'
//             - 'computer'
//             - 'player's choice'
//     - Should I be looking ahead and incorporating these functions already
//         - alternatePlayer(currentPlayer)
//             - 
//         - chooseSquare(board, currentPlayer)
//             - calls either computerChoosesSquare() or playerChoosesSquare()
//               depending on the value of currentPlayer variable

// # Examples

// while (true) {
//   displayBoard(board);
//   chooseSquare(board, currentPlayer);
//   currentPlayer = alternatePlayer(currentPlayer);
//   if (someoneWon(board) || boardFull(board)) break;
// }

// --------

// - the above is the updated "Winner or tie?" loop
// - the initial choice of currentPlayer would come at the top level
//     - from another function? 

// # Algorithm

// currentPlayer() 
//     - chooses randomly (?) either
//         - ['player', 'computer', 'choose'] 
//             --> ie index 0, 1, or 2
//         - if 'player', return 'player'
//         - if 'computer', return 'computer'
//         - if 'choose', prompt user for either 'player' or 'computer'
//             - validate input, then return

// - the return value from currentPlayer() is passed into 

// --> chooseSquare(board, currentPlayer)
//     - if 'player', call and return playerChoosesSquare(board)
//     - if 'computer', call and return computerChoosesSquare(board)

// --> after this, invoke alternatePlayer(currentPlayer)
//     - this function changes currentPlayer
//         - if last turn was 'player', return 'computer'
//         - if last turn was 'computer', return 'player'

const FIRST_MOVE = ['player', 'computer', 'choose'];
const RANDOM_PLAYER_INDEX = Math.floor(Math.random() * 3);
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function currentPlayer(idx = RANDOM_PLAYER_INDEX) {
  currentPlayer = FIRST_MOVE[idx];

  if (currentPlayer === 'choose') {
    while (true) {
      prompt('Choose who goes first ("computer" or "player")');
      currentPlayer = readline.question().toLowerCase();

      if (currentPlayer === 'computer' || currentPlayer === 'player') break;
      prompt('Not a valid choice. Choose either "computer" or "player"');
    }
  }

  return currentPlayer;
}

function chooseSquare(board, currentPlayer) {
  switch (currentPlayer()) {
    case 'player': return playerChoosesSquare(board);
    case 'computer': return computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') {
    return 'computer';
  } else if (currentPlayer === 'computer') {
    return 'player';
  }
}