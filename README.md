# us-state-codes

[![build](https://circleci.com/gh/mdzhang/us-state-codes.svg?style=shield)](https://circleci.com/gh/mdzhang/us-state-codes)
[![version](http://img.shields.io/npm/v/us-state-codes.svg)](https://npmjs.org/package/us-state-codes)
[![license](http://img.shields.io/npm/l/us-state-codes.svg)](https://npmjs.org/package/us-state-codes)

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