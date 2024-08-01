# Textual Description

- 21 is a two-player game
- one is a dealer, the other is a player
- There is one deck with 52 cards
  - the deck is divided into 4 suits
    - hearts
    - spades
    - clubs
    - diamonds
  - each suit is divided into 13 cards
    - 2 thru 10
    - jack
    - king
    - queen 
    - ace
- The goal is to get as close to 21 points without busting
  - busting is going over 21 points
  - points are calculated by counting the point values of each card in a player's hand:
    - numerical cards are worth the number on the card
    - face cards (jack, king, queen) are worth 10 
    - ace is either worth 11 as long as this doesn't bust the hand, else ace is worth 1

- The setup 
  - both the dealer and the player are dealt 2 cards
  - the player can see both of his own cards, but only one of the dealer's cards

- The play
  - The player's turn consists of deciding to:
    - hit: the player is dealt another card
    - or stay: the player is not dealt another card
  - the Dealer's turn
    - hit: until hand reaches at least 17
    - hit or stay after reaching 17

- The rules
  - if the player busts, the dealer wins
  - if the dealer busts, the player wins
  - otherwise, the person with the most points wins

# Extract nouns and verbs

- Nouns
  - game
  - dealer
  - player
  - deck
  - cards
  - suits
  - points
  - setup
  - turn

- Verbs
  - bust
  - hit
  - stay
  - compare cards

# Organize/associate nouns & verbs

- Game(n)
  - deal(v)
  - play(v)
  - turn(n)
  - compare cards(v)

- Deck(n)
  - suits(n)
    - cards(n)
      - face cards
      - ace
      - numerical cards

- Dealer(n)
- Player(n)
  - hit(v)
  - stay(v)
  - bust(state)
  - score(n, state)

## Additional Requirements

- Welcome player
- Say goodbye to player
- each time player hits or stays:
  - display the Dealer's visible cards (one is hidden)
  - display Player's hand and score (point total)

- For dealer's turn
  - dealer doesn't play if player busts
  - display dealer's entire hand (including hidden card) and score
  - redisplay dealer's hand after each hit
  - display result when dealer stays

- After each game, ask if player would like to play again

- Give Player $5 for betting.
  - deduct $1 for each loss
  - add $1 for each win.
  - quit when player is broke (reaches $0)
  - quit when player is rich (reaches $10)

- Create a new deck for each new game

# Scaffolding