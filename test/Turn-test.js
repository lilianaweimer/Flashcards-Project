const expect = require('chai').expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('array');
    expect(turn.guess).to.equal('array');
  });

  it('should store a card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('array', card);
    expect(turn.card).to.equal(card);
  });

  it('should be able to return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('array', card);

    turn.returnGuess();
    expect(turn.returnGuess()).to.equal('array')
  });

  it('should be able to return the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('array', card);

    turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return true if the users\'s answer is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return false if the users\'s answer is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('array', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return \'Correct!\' if the users\'s answer is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);

    expect(turn.giveFeedback()).to.equal('Correct!');
  });

  it('should return \'Incorrect!\' if the users\'s answer is incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('array', card);

    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });

});
