var map = require('lodash.map');
var invert = require('lodash.invert');
var isString = require('lodash.isstring');

var stateNamesByCode = require('./states.json');
var stateCodesByName = invert(stateNamesByCode);

// normalizes case and removes invalid characters
// returns null if can't find sanitized code in the state map
var sanitizeStateCode = function(code) {
  code = isString(code) ? code.trim().toUpperCase().replace(/[^A-Z]/g, '') : null;
  return stateNamesByCode[code] ? code : null;
};

// returns a valid state name else null
var getStateNameByStateCode = function(code) {
  return stateNamesByCode[sanitizeStateCode(code)] || null;
};

// normalizes case and removes invalid characters
// returns null if can't find sanitized name in the state map
var sanitizeStateName = function(name) {
  if (!isString(name)) {
    return null;
  }

  // bad whitespace remains bad whitespace e.g. "O  hi o" is not valid
  name = name.trim().toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ');

  var tokens = name.split(/\s+/);
  tokens = map(tokens, function(token) {
    return token.charAt(0).toUpperCase() + token.slice(1);
  });

  // account for District of Columbia
  if (tokens.length > 2) {
    tokens[1] = tokens[1].toLowerCase();
  }

  name = tokens.join(' ');
  return stateCodesByName[name] ? name : null;
};

// returns a valid state code else null
var getStateCodeByStateName = function(name) {
  return stateCodesByName[sanitizeStateName(name)] || null;
};

module.exports = {
  sanitizeStateCode: sanitizeStateCode,
  getStateNameByStateCode: getStateNameByStateCode,

  sanitizeStateName: sanitizeStateName,
  getStateCodeByStateName: getStateCodeByStateName
};
