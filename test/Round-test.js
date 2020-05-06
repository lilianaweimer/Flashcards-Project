const expect = require('chai').expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

const testDeck = new Deck([card1, card2, card3]);

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round(testDeck);
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round(testDeck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be initialized with a deck of cards', function() {
    const round = new Round(testDeck);
    expect(round.deck).to.equal(testDeck.cards);
  });

  it('should be able to return the current card', function() {
    const round = new Round(testDeck);
    expect(round.returnCurrentCard()).to.equal(testDeck.cards[0]);
  });

  it('should be able to take a turn', function() {
    const round = new Round(testDeck);
    expect(round.takeTurn).to.be.a('function');
  });

  it('should create a new Turn when a guess is made', function() {
    const round = new Round(testDeck);
    const turn1 = new Turn('pug', card1);

    round.takeTurn('pug');
    expect(round.currentTurn).to.deep.equal(turn1);
  });

  it('should keep track of the turn count', function() {
    const round = new Round(testDeck);

    expect(round.turns).to.equal(0);
  });

  it('should increase the turn count when a guess is made', function() {
    const round = new Round(testDeck);

    round.takeTurn('pug');
    expect(round.turns).to.equal(1);
  });

  it('should go to the next card when a guess is made', function() {
    const round = new Round(testDeck);

    round.takeTurn('pug');
    expect(round.currentCard).to.equal(1);
    expect(round.returnCurrentCard()).to.equal(testDeck.cards[1])
  });

  it('should add incorrect guesses to an incorrectGuesses array', function() {
    const round = new Round(testDeck);

    round.takeTurn('pug');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('gallbladder');
    expect(round.incorrectGuesses).to.deep.equal([1]);
    round.takeTurn('listening to music');
    expect(round.incorrectGuesses).to.deep.equal([1, 12]);
  });

  it('should provide feedback about whether a guess was correct', function() {
    const round = new Round(testDeck);

    expect(round.takeTurn('pug')).to.equal('Incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('Correct!');
    expect(round.takeTurn('listening to music')).to.equal('Incorrect!');
  });

  it('should calculate the percent of correct answers', function() {
    const round = new Round(testDeck);

    round.takeTurn('pug');
    expect(round.percentCorrect()).to.equal(0);
    round.takeTurn('gallbladder');
    expect(round.percentCorrect()).to.equal(50);
    round.takeTurn('listening to music');
    expect(round.percentCorrect()).to.equal((1 / 3) * 100);
  });

  it('should end the round when the last card has been guessed', function() {
    const round = new Round(testDeck);

    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('listening to music');
    expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.percentCorrect()}% of the questions correctly!`);
  });

});
