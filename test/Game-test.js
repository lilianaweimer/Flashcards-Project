const expect = require('chai').expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    const game = new Game();

    expect(game.currentRound).to.equal(0);
  });

  it('should have a start method', function() {
    const game = new Game();

    expect(game.start).to.be.a('function');
  });

  it('should be able to create cards', function() {
    const game = new Game();

    expect(game.createCards).to.be.a('function');
  });

  it('should create an array with createCards', function() {
    const game = new Game();

    expect(game.createCards()).to.be.an('array');
  });

  it('should create an array of Card instances with createCards', function() {
    const game = new Game();

    expect(game.createCards()[0]).to.deep.equal(data.prototypeData[0]);
  });

  it('should be able to create a Deck', function() {
    const game = new Game();

    expect(game.createDeck).to.be.a('function');
  });

  it('should create a Deck using the Card instances it created', function() {
    const game = new Game();

    expect(game.createDeck(game.createCards())).to.be.an.instanceof(Deck);
  });

  it('should be able to create a new Round using the Deck', function() {
    const game = new Game();

    expect(game.createRound(game.createDeck(game.createCards()))).to.be.an.instanceof(Round);
  });

});
