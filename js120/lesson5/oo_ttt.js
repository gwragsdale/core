/**
 * # Description
 * 
 * - Tic Tac Toe is a two-player game
 * - with a 3 x 3 board on which 
 * - each player takes turns placing their marker (either an X or an O)
 * - on the board
 * 
 * - The first player to get three of their markers in a row wins
 * - a row can be a vertical column, a horizontal row, or either diagonal
 * 
 * - One player is human, one is a computer
 * - the human always moves first
 * 
 * - a tie happens when every space on the 3 x 3 board is filled with markers
 * - but no player has three in a row
 * 
 * # Identify Nouns and Verbs
 * 
 * - Nouns:
 *    - players
 *      - human
 *      - computer
 *    - board
 *      - column
 *      - row
 *      - diagonals
 *    - marker
 *      - X
 *      - O
 *    - turn
 * 
 * - Verbs:
 *    - win
 *    - tie
 *    - take turn/place marker/mark/move
 * 
 * # Organize
 *  
 * - Game (n)
 * - Board (n)
 * - Row (n)
 * - Square (n)
 * - Marker (n)
 * - Player (n)
 *    - Mark (v)
 *    - Play (v)
 *    - Human (n)
 *    - Computer (n)
 */

let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter <= 9; counter += 1) {
      this.squares[counter] = new Square();
    }
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ];

  static joinOr(arr, delimiter = ", ", finalDelimiter = "or") {
    let result = "";
    if (arr.length === 2) {
      return arr[0] + " " + finalDelimiter + " " + arr[1];
    } else if (arr.length === 1) {
      return arr[0];
    }

    for (let idx = 0; idx < arr.length; idx += 1) {
      let currentElement = arr[idx];

      if (idx < arr.length - 2) {
        result += (currentElement + delimiter);
      } else if (idx === arr.length - 2) {
        result += (currentElement + delimiter + finalDelimiter + " ");
      } else {
        result += currentElement;
      }
    }

    return result;
  }

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      while (true) {
        this.humanMoves();
        if (this.gameOver()) break;

        this.computerMoves();
        if (this.gameOver()) break;

        this.board.displayWithClear();
      }

      this.board.displayWithClear();
      this.displayResults();

      if (this.playAgain()) this.resetBoard();
      else break;
    }

    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, HUman!");
    } else {
      console.log("A tie game. How boring...");
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  markWinningSquare(player) {
    let squareToMark;

    TTTGame.POSSIBLE_WINNING_ROWS.forEach(row => {
      if (this.board.countMarkersFor(player, row) === 2) {
        row.forEach(square => {
          if (this.board.squares[square].isUnused()) {
            squareToMark = square;
          }
        });
      }
    });

    return squareToMark;
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let validChoices = this.board.unusedSquares();
    let winningSquare = this.markWinningSquare(this.computer);
    let squareToBlock = this.markWinningSquare(this.human);
    let choice;

    if (winningSquare) {           // offense
      choice = winningSquare;
    } else if (squareToBlock) {    // defense
      choice = squareToBlock;
    } else {                       // random choice
      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  playAgain() {
    while (true) {
      let validAnswers = ['yes', 'no', 'y', 'n'];
      let answer = readline.question("Would you like to play again? (y/n): ");

      if (validAnswers.includes(answer.toLowerCase())) {
        return answer.toLowerCase().startsWith('y');
      }

      console.log("Sorry, invalid answer.");
    }
  }

  resetBoard() {
    console.clear();
    console.log("");
    console.log("");
    this.board = new Board();
  }
}

let game = new TTTGame();
game.play();