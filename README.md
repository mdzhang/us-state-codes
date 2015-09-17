# state-postal-codes

A library to help you search, validate, and convert between US state names and postal codes.

```
npm install state-postal-codes --save
```

TODO

## Usage

```
var states = require('state-postal-codes');

var stateName = states.getStateNameByStateCode('hi');
assert(stateName === 'Hawaii');

var stateCode = states.getStateCodeByStateName('HawAiI ');
assert(stateCode === 'HI');
```

## License

MIT.