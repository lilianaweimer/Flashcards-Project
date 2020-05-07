const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    createCards();
  }

  createCards() {
    let cards = [];
    for (let i = 0; i < prototypeQuestions.length; i++) {
      let prototype = prototypeQuestions[i];
      let newCard = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer);
      cards.push(newCard);
    }
    return cards;
  }

  createDeck(cards) {
    let deck = new Deck(cards);
    return deck;
  }

  createRound(deck) {
    let round = new Round(deck);
    return round;
  }
}

module.exports = Game;
