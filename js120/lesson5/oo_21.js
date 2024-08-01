const readline = require('readline-sync');

class Card {
  constructor(value, suit) {
    //STUB
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
    //STUB
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
      let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
      [deck[first], deck[second]] = [deck[second], deck[first]]; // swap elements
    }

    return deck;
  }

  deal() {
    //STUB
    return this.deck.pop();
  }
}

class Participant {
  constructor() {
    //STUB
    this.hand = [];
    this.moneyAvailable = 5;
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
    return this.score() > 21;
  }

  score() {
    //STUB
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
}


class Player extends Participant {
  constructor() {
    //STUB
    // State?
    // Score, hand, money?
    super();
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  hide() {
    //STUB
    // copy dealer's hand but make one card say [HIDDEN]
    return this.hand.slice(1).concat(["[HIDDEN]"]);
  }

  reveal() {
    //STUB
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
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards(this.player, 2);
    this.dealCards(this.dealer, 2);
    this.showCards("hide");
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
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
    //STUB
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

    console.log("");
    console.log(`Your hand: ${playerHand}`);
    console.log(`Your score: ${playerScore}`);
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
      } else {
        break;
      }
    }
  }

  displayResult() {
    this.showCards("reveal");
    console.log(`Dealer's score: ${this.dealer.score()}`);

    if (this.player.gotTwentyOne() || this.dealer.isBusted()) {
      console.log("Congratulations - you win!");
    } else {
      console.log("Sorry - you lose!");
    }
  }
}

let game = new TwentyOneGame();
game.start();