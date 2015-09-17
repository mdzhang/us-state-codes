var expect = require('chai').expect;
var states = require('../index');

describe('state-postal-codes', function() {

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

  it('should sanitize a funky state name', function() {
    var name = '!O#!%hi123132o   ';
    name = states.sanitizeStateName(name);
    expect(name).to.equal('Ohio');
  });

});