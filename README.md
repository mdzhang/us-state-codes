# us-state-codes

A library to help you search, validate, and convert between US state names and postal codes.

## Installation

```
npm install us-state-codes --save
```

## Usage

```
var states = require('us-state-codes');

var stateName = states.getStateNameByStateCode('hi');
assert(stateName === 'Hawaii');

var stateCode = states.getStateCodeByStateName('HawAiI ');
assert(stateCode === 'HI');
```

## License

MIT.