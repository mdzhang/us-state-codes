var expect = require('chai').expect;
var assert = require('chai').assert;
var states = require('../index');

describe('state-postal-codes', function() {

  it('should not fail on usage cases given in README.md', function() {
    var stateCode = 'HI.';
    var stateName = '(HawAiI) ';

    assert(states.sanitizeStateCode(stateCode) === 'HI');
    assert(states.sanitizeStateName(stateName) === 'Hawaii');

    assert(states.getStateNameByStateCode(stateCode) === 'Hawaii');
    assert(states.getStateCodeByStateName(stateName) === 'HI');
  });

  it('should find a state name given a valid state code', function() {
    var name = states.getStateNameByStateCode('NC');
    expect(name).to.equal('North Carolina');
  });

  it('should find a state code given a valid state name', function() {
    var code = states.getStateCodeByStateName('District of Columbia');
    expect(code).to.equal('DC');
  });

  it('should sanitize a funky state code', function() {
    var code = '   hI ,,, ';
    code = states.sanitizeStateCode(code);
    expect(code).to.equal('HI');
  });

  it('should return null for an invalid state code', function() {
    var code = '!O#!%hX123132r   ';
    code = states.sanitizeStateCode(code);
    expect(code).to.be.null;
  });

  it('should sanitize a funky state name', function() {
    var name = '!O#!%hi123132o   ';
    name = states.sanitizeStateName(name);
    expect(name).to.equal('Ohio');
  });

  it('should return null for an invalid state name', function() {
    var name = 'Bilund';
    name = states.sanitizeStateName(name);
    expect(name).to.be.null;
  });

});
