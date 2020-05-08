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
    expect(game.currentRound).to.deep.equal({});
  });

  it('should have a start method', function() {
    const game = new Game();
    expect(game.start).to.be.a('function');
  });

  it('should create an array of Cards', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck[0]).to.deep.equal(data.prototypeData[0]);
  });

  it('should create a Deck array using the Card instances it created', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound.deck).to.be.a('array');
  });

  it('should be able to create a new Round using the Deck', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

});
