const expect = require('chai').expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of Card objects', function() {
    const deck = new Deck(data.prototypeData);
    expect(deck.cards).to.equal(data.prototypeData);
  });

  it('should know how many cards are in the deck', function() {
    const deck = new Deck(data.prototypeData);

    expect(deck.countCards()).to.equal(data.prototypeData.length);
  })

});
