# us-state-codes

[![build](https://circleci.com/gh/mdzhang/us-state-codes.svg?style=shield)](https://circleci.com/gh/mdzhang/us-state-codes)
[![version](http://img.shields.io/npm/v/us-state-codes.svg)](https://npmjs.org/package/us-state-codes)
[![license](http://img.shields.io/npm/l/us-state-codes.svg)](https://npmjs.org/package/us-state-codes)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmdzhang%2Fus-state-codes.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmdzhang%2Fus-state-codes?ref=badge_shield)

A library to help you search, validate, and convert between US state names and state codes.

## Installation

```sh
npm install us-state-codes --save
```

## Usage

```javascript
var states = require('us-state-codes');

var stateCode = 'HI.';
var stateName = '(HawAiI) ';

assert(states.sanitizeStateCode(stateCode) === 'HI');
assert(states.sanitizeStateName(stateName) === 'Hawaii');

assert(states.getStateNameByStateCode(stateCode) === 'Hawaii');
assert(states.getStateCodeByStateName(stateName) === 'HI');
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmdzhang%2Fus-state-codes.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmdzhang%2Fus-state-codes?ref=badge_large)