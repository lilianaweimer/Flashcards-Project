class Round {
  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard(currentCard) {
    return this.deck[currentCard];
  }
}

module.exports = Round;
