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
    var guessCorrectness = this.currentTurn.evaluateGuess();
    var feedback;

    if (guessCorrectness === true) {
      feedback = this.currentTurn.giveFeedback();
      this.turns++;
      this.currentCard++;
    } else if (this.currentCard === undefined) {
      endRound();
    } else {
      feedback = this.currentTurn.giveFeedback();
      this.incorrectGuesses.push(this.deck[this.currentCard].id);
      this.turns++;
      this.currentCard++;
    }

    return feedback;
  }

  percentCorrect() {
    let numberCorrect = this.turns - this.incorrectGuesses.length;

    return (numberCorrect === 0) ? 0 : (numberCorrect / this.turns) * 100;
  }

  endRound() {
      return `** Round over! ** You answered ${this.percentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round;
