const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = 0;
    this.currentTurn;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(currentCard) {
    return this.deck[this.currentCard];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.deck[this.currentCard]);
    switch (this.currentTurn.evaluateGuess()) {
      case (false):
        this.incorrectGuesses.push(this.deck[this.currentCard].id);
      case (true):
        console.log(this.currentTurn.giveFeedback())
        this.turns++;
        this.currentCard++;
    }
  }
}

module.exports = Round;
