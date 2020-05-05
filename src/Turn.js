class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess(guess) {
    return this.guess;
  }
}

module.exports = Turn;
