const readline = require('readline-sync');

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.points = this.getPoints();
  }

  getPoints() {
    if ((typeof this.value) === "number") {
      return this.value;
    } else if (this.value !== 'Ace') {
      return 10;
    } else {
      return 11;
    }
  }

  toString() {
    return `${this.value} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.deck = [];
    this.suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

    this.suits.forEach(suit => {
      this.values.forEach(value => {
        this.deck.push(new Card(value, suit));
      });
    });

    this.deck = this.shuffle(this.deck);
  }

  shuffle(deck) {
    for (let first = deck.length - 1; first > 0; first--) {
      let second = Math.floor(Math.random() * (first + 1));
      [deck[first], deck[second]] = [deck[second], deck[first]];
    }

    return deck;
  }

  deal() {
    return this.deck.pop();
  }
}

class Participant {
  constructor() {
    this.hand = [];
  }

  isBusted() {
    return this.score() > 21;
  }

  score() {
    let points = this.hand.reduce((sum, card) => {
      return sum + card.points;
    }, 0);

    if ((points > 21) && this.handIncludesAce()) points -= 10;

    return points;
  }

  gotTwentyOne() {
    return this.score() === 21;
  }

  handIncludesAce() {
    for (let idx = 0; idx < this.hand.length; idx += 1) {
      let currentCard = this.hand[idx];

      if (currentCard.value === "Ace") return true;
    }

    return false;
  }

  resetHand() {
    this.hand = [];
  }
}


class Player extends Participant {
  constructor() {
    super();
    this.moneyAvailable = 5;
  }

  deductMoney() {
    this.moneyAvailable -= 1;
  }

  awardMoney() {
    this.moneyAvailable += 1;
  }

  showMeTheMoney() {
    console.log(`Money available: $${this.moneyAvailable}.00`);
  }

  isPoor() {
    if (this.moneyAvailable <= 0) {
      console.log("Sorry, you can't play again because YOU ARE OUT OF MONEY!");
      return true;
    } else {
      return false;
    }
  }

  isRich() {
    if (this.moneyAvailable >= 10) {
      console.log("You're rich! Good game!");
      return true;
    } else {
      return false;
    }
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  hide() {
    return this.hand.slice(1).concat(["[HIDDEN]"]);
  }

  reveal() {
    return this.hand;
  }
}

class TwentyOneGame {
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
  }

  start() {
    this.displayWelcomeMessage();

    while (true) {
      this.dealCards(this.player, 2);
      this.dealCards(this.dealer, 2);
      this.showCards("hide");
      this.playerTurn();
      this.dealerTurn();
      this.displayResult();
      if (!this.playAgain() ||
          this.player.isPoor() ||
          this.player.isRich()) {
        break;
      }

      this.resetDeckAndHands();
    }

    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Twenty-One!");
  }

  displayGoodbyeMessage() {
    console.log("Thank you for playing Twenty-One! Goodbye.");
  }

  dealCards(participant, cardsToDeal) {
    for (let count = 1; count <= cardsToDeal; count += 1) {
      participant.hand.push(this.deck.deal());
    }
  }

  showCards(hideOrReveal) {
    let playerHand = this.player.hand.join(", ");
    let playerScore = this.player.score();
    let dealerHand;
    if (hideOrReveal === "hide") dealerHand = this.dealer.hide().join(", ");
    else if (hideOrReveal === 'reveal') dealerHand = this.dealer.reveal().join(", ");
    console.clear();
    console.log("");
    console.log(`Your hand: ${playerHand}`);
    console.log(`Your score: ${playerScore}`);
    this.player.showMeTheMoney();
    console.log('');
    console.log(`Dealer's hand: ${dealerHand}`);
  }

  choseHit() {
    console.log("Hit or Stay (h/s)?");
    let validAnswers = ['hit', 'stay', 'h', 's'];
    let answer;

    while (true) {
      answer = readline.question("").toLowerCase();
      if (validAnswers.includes(answer)) break;
      console.log("Sorry, invalid choice.");
    }

    return answer[0] === 'h';
  }

  playerTurn() {
    while (!this.player.gotTwentyOne() && !this.player.isBusted()) {
      if (this.choseHit()) {
        this.dealCards(this.player, 1);
        console.clear();
        this.showCards("hide");
      } else {
        break;
      }
    }
  }

  dealerTurn() {
    while (true) {
      if (this.dealer.gotTwentyOne() ||
          this.player.gotTwentyOne() ||
          this.player.isBusted()) {
        break;
      } else if (this.dealer.score() < 17) {
        this.dealCards(this.dealer, 1);
        console.log("Dealer hits!");
        this.showCards("reveal");
        console.log(`Dealer's score: ${this.dealer.score()}`);
      } else {
        break;
      }
    }
  }

  determineWinner() {
    let playerScore = this.player.score();
    let dealerScore = this.dealer.score();

    if (this.player.isBusted() || this.dealer.gotTwentyOne()) {
      this.player.deductMoney();
      return "dealer";
    } else if (this.dealer.isBusted() || this.player.gotTwentyOne()) {
      this.player.awardMoney();
      return "player";
    } else if (playerScore > dealerScore) {
      this.player.awardMoney();
      return "player";
    } else if (dealerScore > playerScore) {
      this.player.deductMoney();
      return "dealer";
    } else {
      return "tie";
    }
  }

  displayResult() {
    this.showCards("reveal");
    console.log(`Dealer's score: ${this.dealer.score()}`);
    let outcome = this.determineWinner();

    if (outcome === 'player') {
      console.log("Congratulations - you win!");
    } else if (outcome === 'dealer') {
      console.log("Sorry - you lose!");
    } else if (outcome === 'tie') {
      console.log("It's a tie!");
    }

    this.player.showMeTheMoney();
  }

  playAgain() {
    console.log("Would you like to play again (y/n)?");
    let validAnswers = ['yes', 'no', 'y', 'n'];
    let answer;

    while (true) {
      answer = readline.question().toLowerCase();
      if (validAnswers.includes(answer)) break;
      console.log("Sorry, invalid choice.");
    }

    return answer[0] === "y";
  }

  resetDeckAndHands() {
    this.deck = new Deck();
    this.player.resetHand();
    this.dealer.resetHand();
  }
}

let game = new TwentyOneGame();
game.start();